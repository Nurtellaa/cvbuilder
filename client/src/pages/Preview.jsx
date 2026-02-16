import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from '../components/ResumePreview'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ensurePrintStyles = () => {
  const styleId = 'cv-print-styles'
  if (typeof document === 'undefined') return
  if (document.getElementById(styleId)) return

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = `
    @media print {
      @page { size: A4; margin: 12mm; }
      * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

      body.is-printing * { visibility: hidden !important; }

      body.is-printing [data-print-section="cv"],
      body.is-printing [data-print-section="cv"] * {
        visibility: visible !important;
      }

      body.is-printing [data-print-section="cv"]{
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        width: 210mm !important;
        min-height: 297mm !important;
      }

      .no-print { display: none !important; }
      .avoid-break { break-inside: avoid; page-break-inside: avoid; }
    }
  `
  document.head.appendChild(style)
}

const Preview = () => {
  const { resumeId } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)
  const [isPrinting, setIsPrinting] = useState(false)

  const loadResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/public/' + resumeId)
      setResumeData(data.resume)
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadResume()

    const onAfterPrint = () => {
      document.body.classList.remove('is-printing')
      setIsPrinting(false)
    }
    window.addEventListener('afterprint', onAfterPrint)
    return () => window.removeEventListener('afterprint', onAfterPrint)
  }, [])

  const printResume = async () => {
    try {
      ensurePrintStyles()

      const el = document.getElementById('resume-preview-container')
      if (!el) {
        toast.error('No encuentro el contenedor del CV para imprimir.')
        return
      }

      setIsPrinting(true)
      const t = toast.loading('Abriendo impresión…')

      document.body.classList.add('is-printing')

      if (document.fonts?.ready) await document.fonts.ready
      await new Promise((r) => setTimeout(r, 50))

      toast.dismiss(t)
      window.print()
    } catch (e) {
      console.error(e)
      document.body.classList.remove('is-printing')
      setIsPrinting(false)
      toast.error('No se pudo abrir la impresión.')
    }
  }

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>
  if (!resumeData) return <div className="min-h-screen flex items-center justify-center">Resume not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Preview Header */}
        <div className='mb-10 text-center'>
          <div className='inline-flex items-center gap-2 text-sm font-semibold text-teal-700 bg-teal-50 rounded-full px-5 py-2 mb-6 border border-teal-200'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
              <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
            <span>Live Preview Mode</span>
          </div>
        </div>

        {/* Print tips */}
        <div className="mb-8">
          <div className="bg-white/70 backdrop-blur rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
              Important printing notes
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              Clicking <span className="font-medium text-slate-800">Print / Save PDF</span> opens your browser’s default print dialog.
              Use the options below to get the cleanest PDF.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li>
                <span className="font-medium">Disable</span> <span className="font-medium">Headers and footers</span> (this removes the URL/date/page number).
              </li>
              <li>
                <span className="font-medium">Enable</span> <span className="font-medium">Background graphics</span> (sometimes called “Print backgrounds”) to preserve colors.
              </li>
              <li>
                Set <span className="font-medium">Margins</span> to <span className="font-medium">None</span> for the best fit (or adjust to your preference).
              </li>
              <li>
                Choose <span className="font-medium">Destination</span> → <span className="font-medium">Save as PDF</span>.
              </li>
              <li>
                If the preview looks slightly off, try <span className="font-medium">Scale</span> → <span className="font-medium">Default</span> (or “Fit to page”) and print again.
              </li>
            </ul>
          </div>
        </div>


        <div className="mt-8 mb-8 flex justify-center">
          <button
            onClick={printResume}
            disabled={isPrinting}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 border border-violet-200 rounded-xl font-medium hover:bg-violet-100 hover:border-violet-300 transition-all"
          >
            {isPrinting ? "Loading" : "Print / Save PDF"}
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          
          <div
            id="resume-preview-container"
            data-print-section="cv"
          >
            <ResumePreview
              data={resumeData}
              template={resumeData.template}
              accentColor={resumeData.accent_color}
              classes=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Preview
