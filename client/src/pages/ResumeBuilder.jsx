import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FileText,
  FolderIcon,
  GraduationCap,
  Share2Icon,
  Sparkles,
  User
} from 'lucide-react'
import api from '../configs/api'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'

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

      body.is-printing [data-print-section="cv"] {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        width: 210mm !important;
        min-height: 297mm !important;
      }

      .avoid-break { break-inside: avoid; page-break-inside: avoid; }
      .no-print { display: none !important; }
      .print-only { display: block !important; }
    }

    @media screen {
      .print-only { display: none; }
    }
  `
  document.head.appendChild(style)
}

const printResume = async (setIsPrinting) => {
  if (!setIsPrinting) return
  
  const isPrinting = setIsPrinting._value // Get current state
  if (isPrinting) return
  
  try {
    ensurePrintStyles()

    const element = document.getElementById('resume-preview-container')
    if (!element) {
      toast.error('No encuentro el contenedor del CV para imprimir.')
      return
    }

    setIsPrinting(true)
    const t = toast.loading('Abriendo vista de impresión…')

    document.body.classList.add('is-printing')

    if (document.fonts?.ready) {
      await document.fonts.ready
    }

    await new Promise((r) => setTimeout(r, 50))

    toast.dismiss(t)
    window.print()
  } catch (err) {
    console.error('❌ Print error:', err)
    document.body.classList.remove('is-printing')
    setIsPrinting(false)
    toast.error('No se pudo abrir la impresión. Reinténtalo.')
  }
}

const ResumeBuilder = () => {
  const { resumeId } = useParams()
  const { token } = useSelector(state => state.auth)

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: '',
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: 'classic',
    accent_color: '#0d9488',
    public: true,
  })

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)

  const sections = [
    { id: 'personal', icon: User, name: 'Personal Info', description: 'Basic contact information' },
    { id: 'summary', icon: FileText, name: 'Professional Summary', description: 'Your career overview' },
    { id: 'experience', icon: Briefcase, name: 'Experience', description: 'Employment history' },
    { id: 'education', icon: GraduationCap, name: 'Education', description: 'Academic background' },
    { id: 'projects', icon: FolderIcon, name: 'Projects', description: 'Key projects & achievements' },
    { id: 'skills', icon: Sparkles, name: 'Skills', description: 'Technical & soft skills' },
  ]

  const activeSection = sections[activeSectionIndex]

  useEffect(() => {
    const onAfterPrint = () => {
      document.body.classList.remove('is-printing')
      setIsPrinting(false)
    }
    window.addEventListener('afterprint', onAfterPrint)
    return () => window.removeEventListener('afterprint', onAfterPrint)
  }, [])

  const loadExistingResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/get/' + resumeId, {
        headers: { Authorization: token }
      })
      if (data.resume) {
        setResumeData(data.resume)
        document.title = data.resume.title
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (!resumeId || !token) return
    loadExistingResume()
  }, [resumeId, token])


  const changeResumeVisibility = async () => {
    try {
      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append('resumeData', JSON.stringify({ public: !resumeData.public }))

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { Authorization: token }
      })

      setResumeData({ ...resumeData, public: !resumeData.public })
      toast.success(data.message)
    } catch (error) {
      console.error('Error saving resume:', error)
    }
  }

  const goToPreview = async () => {
    try {
      await saveResume(); 
    } catch (e) {
      toast?.error?.("No se pudo guardar antes del preview");
      return;
    }

    if (!resumeId) {
      toast?.error?.("Save the CV first to be able to preview");
      return;
    }

    const base =
      (typeof frontendUrl !== "undefined" && frontendUrl) ||
      (typeof window !== "undefined" ? window.location.origin : "");

    const resumeUrl = `${base}/view/${resumeId}`;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };



  const handleShare = () => {
    const frontendUrl = window.location.href.split('/app/')[0]
    const resumeUrl = frontendUrl + '/view/' + resumeId

    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: 'My Resume' })
    } else {
      alert('Share not supported on this browser.')
    }
  }

  const saveResume = async () => {
    try {
      let updatedResumeData = structuredClone(resumeData)

      // Remove image from updatedResumeData
      if (typeof resumeData.personal_info.image === 'object') {
        delete updatedResumeData.personal_info.image
      }

      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append('resumeData', JSON.stringify(updatedResumeData))
      removeBackground && formData.append('removeBackground', 'yes')
      typeof resumeData.personal_info.image === 'object' &&
        formData.append('image', resumeData.personal_info.image)

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { Authorization: token }
      })

      setResumeData(data.resume)
      toast.success(data.message)
    } catch (error) {
      console.error('Error saving resume:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to={'/app'}
                className="group inline-flex gap-3 items-center text-slate-600 hover:text-teal-700 transition-all"
              >
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-teal-50 transition-colors">
                  <ArrowLeftIcon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Back to Dashboard</p>
                  <p className="text-xs text-slate-500">Manage all resumes</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-slate-700">Editing</p>
                <p className="font-semibold text-slate-900 truncate max-w-[200px]">
                  {resumeData.title || 'Untitled Resume'}
                </p>
              </div>
              <div className="size-10 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel - Editor */}
          <div className="lg:col-span-5">
            {/* Progress Navigation */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 mb-2">
                    Build Your Resume
                  </h1>
                  <p className="text-slate-600">
                    Step-by-step guidance for a perfect resume
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-slate-500">
                    Step{' '}
                    <span className="font-bold text-teal-600">
                      {activeSectionIndex + 1}
                    </span>{' '}
                    of {sections.length}
                  </div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="relative mb-10">
                {/* Progress Line */}
                <div className="absolute top-4 left-0 right-0 h-1 bg-slate-200 rounded-full -z-10"></div>
                <div
                  className="absolute top-4 left-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full -z-10 transition-all duration-500"
                  style={{
                    width: `${(activeSectionIndex / (sections.length - 1)) * 100}%`,
                  }}
                ></div>

                {/* Step Indicators */}
                <div className="flex justify-between">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSectionIndex(index)}
                      className={`flex flex-col items-center gap-2 ${
                        index <= activeSectionIndex
                          ? 'text-teal-600'
                          : 'text-slate-400'
                      }`}
                    >
                      <div
                        className={`size-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                          index === activeSectionIndex
                            ? 'bg-white border-teal-500 shadow-lg shadow-teal-200/50'
                            : index < activeSectionIndex
                            ? 'bg-teal-500 border-teal-500 text-white'
                            : 'bg-white border-slate-300'
                        }`}
                      >
                        {index < activeSectionIndex ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <section.icon className="size-4" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {/* Editor Header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeSectionIndex <= activeSectionIndex
                            ? 'bg-teal-50 text-teal-600'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <activeSection.icon className="size-5" />
                      </div>
                      {activeSection.name}
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      {activeSection.description}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-2">
                    {activeSectionIndex !== 0 && (
                      <button
                        onClick={() =>
                          setActiveSectionIndex((prevIndex) =>
                            Math.max(prevIndex - 1, 0)
                          )
                        }
                        className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all"
                      >
                        <ChevronLeft className="size-4" /> Previous
                      </button>
                    )}
                    {activeSectionIndex !== sections.length - 1 && (
                      <button
                        onClick={() =>
                          setActiveSectionIndex((prevIndex) =>
                            Math.min(prevIndex + 1, sections.length - 1)
                          )
                        }
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
                      >
                        Next Section <ChevronRight className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Template & Color Customization */}
                {(activeSection.id === 'personal' || activeSection.id === 'skills') && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-600"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                      Design Customization
                    </h3>

                    <div className="flex flex-wrap gap-4">
                      <TemplateSelector
                        selectedTemplate={resumeData.template}
                        onChange={(template) =>
                          setResumeData((prev) => ({ ...prev, template }))
                        }
                      />
                      <ColorPicker
                        selectedColor={resumeData.accent_color}
                        onChange={(color) =>
                          setResumeData((prev) => ({ ...prev, accent_color: color }))
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Editor Content */}
              <div className="p-6">
                <div className="space-y-8">
                  {activeSection.id === 'personal' && (
                    <PersonalInfoForm
                      data={resumeData.personal_info}
                      onChange={(data) =>
                        setResumeData((prev) => ({
                          ...prev,
                          personal_info: data,
                        }))
                      }
                      removeBackground={removeBackground}
                      setRemoveBackground={setRemoveBackground}
                    />
                  )}
                  {activeSection.id === 'summary' && (
                    <ProfessionalSummaryForm
                      data={resumeData.professional_summary}
                      onChange={(data) =>
                        setResumeData((prev) => ({
                          ...prev,
                          professional_summary: data,
                        }))
                      }
                      setResumeData={setResumeData}
                    />
                  )}
                  {activeSection.id === 'experience' && (
                    <ExperienceForm
                      data={resumeData.experience}
                      onChange={(data) =>
                        setResumeData((prev) => ({ ...prev, experience: data }))
                      }
                    />
                  )}
                  {activeSection.id === 'education' && (
                    <EducationForm
                      data={resumeData.education}
                      onChange={(data) =>
                        setResumeData((prev) => ({ ...prev, education: data }))
                      }
                    />
                  )}
                  {activeSection.id === 'projects' && (
                    <ProjectForm
                      data={resumeData.project}
                      onChange={(data) =>
                        setResumeData((prev) => ({ ...prev, project: data }))
                      }
                    />
                  )}
                  {activeSection.id === 'skills' && (
                    <SkillsForm
                      data={resumeData.skills}
                      onChange={(data) =>
                        setResumeData((prev) => ({ ...prev, skills: data }))
                      }
                    />
                  )}
                </div>

                {/* Save Button */}
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      toast.promise(saveResume, {
                        loading: 'Saving...',
                        success: 'Resume saved!',
                        error: 'Failed to save',
                      })
                    }}
                    className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    Save All Changes
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-3">
                    Changes are auto-saved, but click to ensure everything is
                    updated
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-7">
            {/* Preview Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Live Preview
                  </h2>
                  <p className="text-slate-600">
                    See changes in real-time as you edit. <br />
                    To preview and download make it public.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {/* Share Status */}
                  <div
                    className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                      resumeData.public
                        ? 'bg-teal-50 text-teal-700 border border-teal-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <div
                      className={`size-2 rounded-full ${
                        resumeData.public ? 'bg-teal-500' : 'bg-slate-500'
                      }`}
                    ></div>
                    <span className="text-sm font-medium">
                      {resumeData.public ? 'Public • Shareable' : 'Private • Draft'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={changeResumeVisibility}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                    resumeData.public
                      ? 'bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 border border-teal-200 hover:bg-teal-100 hover:border-teal-300'
                      : 'bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {resumeData.public ? (
                    <>
                      <EyeIcon className="size-4" />
                      Make Private
                    </>
                  ) : (
                    <>
                      <EyeOffIcon className="size-4" />
                      Make Public
                    </>
                  )}
                </button>
                {resumeData.public && (
                  <button

                  onClick={goToPreview}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-50 to-violet-100 text-violet-700 border border-violet-200 rounded-xl font-medium hover:bg-violet-100 hover:border-violet-300 transition-all"
                >
                  <DownloadIcon className="size-4" />
                  Preview PDF
                </button>
                )}
                
              </div>
            </div>

            {/* Preview Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/20 to-cyan-100/20 rounded-3xl blur-xl -z-10"></div>
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform hover:shadow-3xl transition-shadow duration-500">
                <div className="p-2 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="size-3 rounded-full bg-red-400"></div>
                        <div className="size-3 rounded-full bg-amber-400"></div>
                        <div className="size-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-sm text-slate-500 font-medium">
                        Resume Preview
                      </span>
                    </div>
                  </div>
                </div>

                <div id="resume-preview-container" data-print-section="cv">
                  <ResumePreview
                    data={resumeData}
                    template={resumeData.template}
                    accentColor={resumeData.accent_color}
                  />
                </div>
              </div>
            </div>

            {/* Preview Tips */}
            <div className="mt-8 p-6 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 rounded-2xl border border-teal-100">
              <h3 className="font-semibold text-teal-900 mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                Pro Tips for Better Results
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <div className="size-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Use action verbs and quantify achievements with numbers
                </li>
                <li className="flex items-start gap-2">
                  <div className="size-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Keep your professional summary concise (2-3 sentences)
                </li>
                <li className="flex items-start gap-2">
                  <div className="size-5 rounded-full bg-teal-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  Use the same template for all applications to maintain
                  consistency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder