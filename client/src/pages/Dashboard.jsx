import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

  const {user, token} = useSelector(state => state.auth)

  const colors = ["#0d9488", "#0891b2", "#7c3aed", "#db2777", "#ea580c", "#16a34a", "#9333ea"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () =>{
    try {
      const { data } = await api.get('/api/users/resumes', {headers: { Authorization: token }})
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
   try {
    event.preventDefault()
    const { data } = await api.post('/api/resumes/create', {title}, {headers: { Authorization: token }})
    setAllResumes([...allResumes, data.resume])
    setTitle('')
    setShowCreateResume(false)
    navigate(`/app/builder/${data.resume._id}`)
   } catch (error) {
    toast.error(error?.response?.data?.message || error.message)
   }
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', {title, resumeText}, {headers: { Authorization: token }})
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`, {resumeId: editResumeId, resumeData: { title }}, {headers: { Authorization: token }})
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
     if(confirm){
      const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers: { Authorization: token }})
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
     }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
     
  }

  useEffect(()=>{
    loadAllResumes()
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50/50">
      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Dashboard Header */}
        <div className='mb-12'>
          <h1 className='text-4xl font-bold text-slate-900 mb-3'>
            Welcome back, <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">{user?.name || "Professional"}</span>
          </h1>
          <p className='text-lg text-slate-600'>
            Manage your professional resumes and create new ones to advance your career.
          </p>
        </div>

        {/* Quick Actions Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
            Quick Actions
          </h2>
          
          <div className='flex flex-col sm:flex-row gap-6 mb-10'>
            {/* Create Resume Card */}
            <button 
              onClick={()=> setShowCreateResume(true)} 
              className='group relative bg-white rounded-2xl p-8 border-2 border-dashed border-teal-200 hover:border-teal-400 hover:shadow-xl transition-all duration-500 cursor-pointer flex-1 overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-teal-50/50 to-white -z-10'></div>
              <div className='flex flex-col items-center justify-center gap-6 text-center'>
                <div className='relative'>
                  <div className='size-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" x2="8" y1="13" y2="13"/>
                      <line x1="16" x2="8" y1="17" y2="17"/>
                      <line x1="10" x2="8" y1="9" y2="9"/>
                    </svg>
                  </div>
                  <div className='absolute -top-2 -right-2 size-10 bg-amber-500 rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors'>Create New Resume</h3>
                  <p className='text-slate-600'>Start fresh with AI-powered templates and guidance</p>
                </div>
              </div>
            </button>

            {/* Upload Resume Card */}
            <button 
              onClick={()=> setShowUploadResume(true)} 
              className='group relative bg-white rounded-2xl p-8 border-2 border-dashed border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-500 cursor-pointer flex-1 overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-white -z-10'></div>
              <div className='flex flex-col items-center justify-center gap-6 text-center'>
                <div className='relative'>
                  <div className='size-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" x2="12" y1="3" y2="15"/>
                    </svg>
                  </div>
                  <div className='absolute -top-2 -right-2 size-10 bg-rose-500 rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <path d="M12 15V3"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors'>Upload Existing Resume</h3>
                  <p className='text-slate-600'>Import and enhance your current resume with AI</p>
                </div>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-slate-500">
                {allResumes.length > 0 ? 'Your Professional Resumes' : 'Start Building Your Collection'}
              </span>
            </div>
          </div>
        </div>

        {/* Resumes Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allResumes.map((resumeItem, index) => {
              const baseColor = colors[index % colors.length];
              const gradientColor = `${baseColor}${baseColor === '#0d9488' ? '' : baseColor.slice(1)}`; // For teal, keep original
              
              return (
                <div 
                  key={index} 
                  onClick={()=> navigate(`/app/builder/${resumeItem._id}`)}
                  className='group relative bg-white rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden'
                  style={{ borderColor: baseColor + '40' }}
                >
                  {/* Background Gradient */}
                  <div 
                    className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500'
                    style={{ background: `linear-gradient(135deg, ${baseColor}20, transparent)` }}
                  ></div>

                  {/* Card Content */}
                  <div className='relative p-6'>
                    {/* Icon */}
                    <div 
                      className='size-14 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-500'
                      style={{ background: `linear-gradient(135deg, ${baseColor}20, ${baseColor}10)` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: baseColor }}>
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" x2="8" y1="13" y2="13"/>
                        <line x1="16" x2="8" y1="17" y2="17"/>
                        <line x1="10" x2="8" y1="9" y2="9"/>
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 
                      className='text-lg font-bold mb-2 line-clamp-2 group-hover:translate-x-1 transition-transform duration-300'
                      style={{ color: baseColor }}
                    >
                      {resumeItem.title}
                    </h3>

                    {/* Date */}
                    <p className='text-sm text-slate-500 mb-4 flex items-center gap-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      Updated {new Date(resumeItem.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>

                    {/* Action Buttons */}
                    <div className='flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <button 
                        onClick={(e)=> { e.stopPropagation(); setEditResumeId(resumeItem._id); setTitle(resumeItem.title); }}
                        className='p-2 rounded-lg hover:bg-slate-100 transition-colors'
                        title="Edit title"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                      </button>
                      <button 
                        onClick={(e)=> { e.stopPropagation(); deleteResume(resumeItem._id); }}
                        className='p-2 rounded-lg hover:bg-red-50 transition-colors'
                        title="Delete resume"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                          <path d="M3 6h18"/>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                          <line x1="10" x2="10" y1="11" y2="17"/>
                          <line x1="14" x2="14" y1="11" y2="17"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty State */}
          {allResumes.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center size-24 bg-gradient-to-br from-slate-100 to-white rounded-3xl border border-slate-200 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" x2="8" y1="13" y2="13"/>
                  <line x1="16" x2="8" y1="17" y2="17"/>
                  <line x1="10" x2="8" y1="9" y2="9"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No Resumes Yet</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-8">
                Start building your professional portfolio by creating your first resume. 
                It only takes a few minutes with our AI-powered tools.
              </p>
              <button 
                onClick={()=> setShowCreateResume(true)} 
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Create Your First Resume
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Create Resume */}
      {showCreateResume && (
        <div 
          onClick={()=> setShowCreateResume(false)} 
          className='fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4'
        >
          <div 
            onClick={e => e.stopPropagation()} 
            className='relative bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 scale-95 hover:scale-100'
          >
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 mb-2'>Create New Resume</h2>
              <p className='text-slate-600'>Give your resume a descriptive title to get started.</p>
            </div>
            
            <form onSubmit={createResume}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Resume Title</label>
                <input 
                  onChange={(e)=>setTitle(e.target.value)} 
                  value={title} 
                  type="text" 
                  placeholder='e.g., "Senior Developer Resume"'
                  className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all'
                  required
                  autoFocus
                />
                <p className="text-sm text-slate-500 mt-2">You can change this later</p>
              </div>

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={()=> {setShowCreateResume(false); setTitle('')}}
                  className='flex-1 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className='flex-1 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Start Creating
                </button>
              </div>
            </form>
            
            <button 
              onClick={()=> {setShowCreateResume(false); setTitle('')}}
              className='absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Modal for Upload Resume */}
      {showUploadResume && (
        <div 
          onClick={()=> setShowUploadResume(false)} 
          className='fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4'
        >
          <div 
            onClick={e => e.stopPropagation()} 
            className='relative bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 scale-95 hover:scale-100'
          >
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 mb-2'>Upload Existing Resume</h2>
              <p className='text-slate-600'>Import and enhance your current resume with AI analysis.</p>
            </div>
            
            <form onSubmit={uploadResume}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume Title</label>
                  <input 
                    onChange={(e)=>setTitle(e.target.value)} 
                    value={title} 
                    type="text" 
                    placeholder='e.g., "Updated 2024 Resume"'
                    className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume-input" className="block text-sm font-medium text-slate-700 mb-2">
                    Resume File (PDF only)
                  </label>
                  <div 
                    onClick={() => document.getElementById('resume-input').click()}
                    className={`border-2 border-dashed ${resume ? 'border-teal-500 bg-teal-50/50' : 'border-slate-300 hover:border-teal-400'} rounded-xl p-8 text-center cursor-pointer transition-all duration-300 group`}
                  >
                    {resume ? (
                      <div className="space-y-3">
                        <div className="size-16 mx-auto bg-teal-100 rounded-xl flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                            <polyline points="14 2 14 8 20 8"/>
                          </svg>
                        </div>
                        <p className="font-medium text-teal-700">{resume.name}</p>
                        <p className="text-sm text-slate-500">Click to choose a different file</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="size-16 mx-auto bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-teal-500">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" x2="12" y1="3" y2="15"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-slate-700 mb-1">Drag & drop or click to upload</p>
                          <p className="text-sm text-slate-500">PDF files only, max 10MB</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <input 
                    type="file" 
                    id='resume-input' 
                    accept='.pdf' 
                    hidden 
                    onChange={(e)=> setResume(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button 
                  type="button"
                  onClick={()=> {setShowUploadResume(false); setTitle(''); setResume(null);}}
                  className='flex-1 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className='flex-1 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin size-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Upload & Enhance'
                  )}
                </button>
              </div>
            </form>
            
            <button 
              onClick={()=> {setShowUploadResume(false); setTitle(''); setResume(null);}}
              className='absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Modal for Edit Title */}
      {editResumeId && (
        <div 
          onClick={()=> setEditResumeId('')} 
          className='fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4'
        >
          <div 
            onClick={e => e.stopPropagation()} 
            className='relative bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 scale-95 hover:scale-100'
          >
            <div className='mb-8'>
              <h2 className='text-2xl font-bold text-slate-900 mb-2'>Rename Resume</h2>
              <p className='text-slate-600'>Update the title of your resume for better organization.</p>
            </div>
            
            <form onSubmit={editTitle}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">New Resume Title</label>
                <input 
                  onChange={(e)=>setTitle(e.target.value)} 
                  value={title} 
                  type="text" 
                  placeholder='Enter new resume title'
                  className='w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all'
                  required
                  autoFocus
                />
              </div>

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={()=> {setEditResumeId(''); setTitle('');}}
                  className='flex-1 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300'
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className='flex-1 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Update Title
                </button>
              </div>
            </form>
            
            <button 
              onClick={()=> {setEditResumeId(''); setTitle('');}}
              className='absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
