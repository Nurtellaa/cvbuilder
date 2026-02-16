import { Loader2, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {

  const { token } = useSelector(state => state.auth)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSummary = async () => {
    try {
      setIsGenerating(true)
      const prompt = `enhance my professional summary "${data}"`;
      const response = await api.post('/api/ai/enhance-pro-sum', {userContent: prompt}, {headers: { Authorization: token }})
      setResumeData(prev => ({...prev, professional_summary: response.data.enhancedContent}))
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    finally{
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <line x1="16" x2="8" y1="13" y2="13"/>
              <line x1="16" x2="8" y1="17" y2="17"/>
              <line x1="10" x2="8" y1="9" y2="9"/>
            </svg>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-slate-900'>Professional Summary</h3>
            <p className='text-slate-600 mt-1'>Your career elevator pitch - make it count</p>
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
      </div>

      {/* AI Enhancement Card */}
      <div className="bg-gradient-to-r from-teal-50/50 to-cyan-50/50 rounded-2xl border border-teal-200 p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-teal-100 to-white border border-teal-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                <path d="M12 2a10 10 0 0 1 7.38 16.75"/>
                <path d="M12 2a10 10 0 0 0-7.38 16.75"/>
                <path d="M12 2v20"/>
                <path d="M22 12H2"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-teal-900 mb-1">AI-Powered Enhancement</h4>
              <p className="text-sm text-teal-700/80">Let our AI craft a compelling summary that stands out</p>
            </div>
          </div>
          
          <button 
            disabled={isGenerating} 
            onClick={generateSummary}
            className="group relative px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3 min-w-[180px] justify-center"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl"></div>
            {isGenerating ? (
              <>
                <svg className="animate-spin size-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="relative">Enhancing...</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative">
                  <path d="m9 12 2 2 4-4"/>
                  <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"/>
                  <path d="M22 19H2"/>
                </svg>
                <span className="relative">Enhance with AI</span>
              </>
            )}
          </button>
        </div>

        <div className="text-sm text-teal-700 space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-teal-500"></div>
            <span>Optimizes for ATS screening and recruiter attention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-teal-500"></div>
            <span>Incorporates industry keywords and action verbs</span>
          </div>
        </div>
      </div>

      {/* Summary Editor */}
      <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-slate-100 to-white border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              Your Professional Summary
            </h4>
          </div>
          <p className="text-slate-600">This is the first thing employers will read - make it impactful</p>
        </div>

        <div className="relative">
          <textarea 
            value={data || ""} 
            onChange={(e)=> onChange(e.target.value)} 
            rows={8} 
            className='w-full p-5 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-700 placeholder-slate-400 hover:border-slate-400 resize-none text-base leading-relaxed'
            placeholder='Example: Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative software solutions. Expert in Agile methodologies, user-centered design, and data-driven decision making. Proven track record of increasing product adoption by 40% and reducing churn by 25% through strategic feature development and customer feedback integration...'
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className="text-xs text-slate-500">
              Recommended: 50-100 words
            </div>
          </div>
        </div>

        {/* Character Counter & Tips */}
        <div className="mt-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h5 className="font-semibold text-slate-900">Writing Tips</h5>
            </div>
            <div className="text-sm text-slate-600 space-y-2 pl-9">
              <div className="flex items-start gap-2">
                <div className="size-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span>Start with your current role and years of experience</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="size-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span>Highlight 2-3 key achievements with metrics</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="size-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span>Mention relevant skills and methodologies</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="size-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></div>
                <span>End with your career objectives or value proposition</span>
              </div>
            </div>
          </div>

          <div className="sm:w-48">
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-teal-600 mb-1">
                  {data ? Math.ceil(data.split(' ').length / 100 * 100) : 0}%
                </div>
                <div className="text-xs text-slate-600">Recruiter Attention Score</div>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${data ? Math.min(Math.ceil(data.split(' ').length / 100 * 100), 100) : 0}%` }}
                ></div>
              </div>
              <div className="text-xs text-slate-500 text-center mt-2">
                {data ? `${data.split(' ').length} words` : '0 words'} • Ideal: 50-100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm
