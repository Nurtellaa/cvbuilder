import { Briefcase, Loader2, Plus, Sparkles, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ExperienceForm = ({ data, onChange }) => {

    const { token } = useSelector(state => state.auth)
    const [generatingIndex, setGeneratingIndex] = useState(-1)

    const addExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false
        };
        onChange([...data, newExperience])
    }

    const removeExperience = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }

    const generateDescription = async (index) => {
        setGeneratingIndex(index)
        const experience = data[index]
        const prompt = `enhance this job description ${experience.description} for the position of ${experience.position} at ${experience.company}.`

        try {
            const { data } = await api.post('api/ai/enhance-job-desc', { userContent: prompt }, { headers: { Authorization: token } })
            updateExperience(index, "description", data.enhancedContent)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setGeneratingIndex(-1)
        }
    }

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-900'>Work Experience</h3>
                        <p className='text-slate-600 mt-1'>Showcase your career journey and achievements</p>
                    </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
            </div>

            {/* Empty State */}
            {data.length === 0 ? (
                <div className='text-center py-12 bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border-2 border-dashed border-slate-300'>
                    <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">No Work Experience Added</h4>
                    <p className="text-slate-600 max-w-md mx-auto mb-8">
                        Add your professional experience to demonstrate your career growth and accomplishments.
                    </p>
                    <button 
                        onClick={addExperience} 
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                        Add First Experience
                    </button>
                </div>
            ) : (
                <div className='space-y-6'>
                    {/* Experience List */}
                    {data.map((experience, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Experience Header */}
                            <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-200 flex items-center justify-center">
                                            <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Experience #{index + 1}</h4>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => removeExperience(index)} 
                                        className="p-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 6h18"/>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Experience Form */}
                            <div className="p-6 space-y-6">
                                {/* Basic Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <path d="M3 9a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9Z"/>
                                                <path d="M8 12h8"/>
                                                <path d="M12 8v8"/>
                                            </svg>
                                            Company Name *
                                        </label>
                                        <input 
                                            value={experience.company || ""} 
                                            onChange={(e) => updateExperience(index, "company", e.target.value)} 
                                            type="text" 
                                            placeholder="e.g., Google, Microsoft, Amazon" 
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                                <circle cx="9" cy="7" r="4"/>
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                            </svg>
                                            Job Title *
                                        </label>
                                        <input 
                                            value={experience.position || ""} 
                                            onChange={(e) => updateExperience(index, "position", e.target.value)} 
                                            type="text" 
                                            placeholder="e.g., Senior Software Engineer, Product Manager" 
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                <line x1="16" x2="16" y1="2" y2="6"/>
                                                <line x1="8" x2="8" y1="2" y2="6"/>
                                                <line x1="3" x2="21" y1="10" y2="10"/>
                                            </svg>
                                            Start Date *
                                        </label>
                                        <input 
                                            value={experience.start_date || ""} 
                                            onChange={(e) => updateExperience(index, "start_date", e.target.value)} 
                                            type="month" 
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                <line x1="16" x2="16" y1="2" y2="6"/>
                                                <line x1="8" x2="8" y1="2" y2="6"/>
                                                <line x1="3" x2="21" y1="10" y2="10"/>
                                            </svg>
                                            End Date
                                        </label>
                                        <input 
                                            value={experience.end_date || ""} 
                                            onChange={(e) => updateExperience(index, "end_date", e.target.value)} 
                                            type="month" 
                                            disabled={experience.is_current} 
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 outline-none transition-all ${
                                                experience.is_current 
                                                ? 'border-slate-200 bg-slate-50 text-slate-400' 
                                                : 'border-slate-300 focus:border-teal-500 focus:ring-teal-200'
                                            }`}
                                            placeholder="Present"
                                        />
                                    </div>
                                </div>

                                {/* Current Role Toggle */}
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50/50 to-white rounded-xl border border-slate-200">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={experience.is_current || false} 
                                            onChange={(e) => { updateExperience(index, "is_current", e.target.checked) }} 
                                            className="sr-only peer" 
                                        />
                                        <div className='w-11 h-6 bg-slate-300 rounded-full peer peer-checked:bg-teal-500 transition-colors duration-300 shadow-inner'></div>
                                        <div className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-5'></div>
                                    </label>
                                    <div>
                                        <div className="font-medium text-slate-900">Currently Working Here</div>
                                        <div className="text-sm text-slate-600">Check if this is your current position</div>
                                    </div>
                                </div>

                                {/* Job Description Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                                    <polyline points="14 2 14 8 20 8"/>
                                                    <line x1="16" x2="8" y1="13" y2="13"/>
                                                    <line x1="16" x2="8" y1="17" y2="17"/>
                                                    <line x1="10" x2="8" y1="9" y2="9"/>
                                                </svg>
                                                Job Description & Achievements *
                                            </label>
                                        </div>
                                        <button 
                                            onClick={() => generateDescription(index)} 
                                            disabled={generatingIndex === index || !experience.position || !experience.company} 
                                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                                                generatingIndex === index 
                                                ? 'bg-teal-100 text-teal-700' 
                                                : 'bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 hover:from-teal-100 hover:to-teal-200 border border-teal-200'
                                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                                        >
                                            {generatingIndex === index ? (
                                                <>
                                                    <svg className="animate-spin size-4 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span>Enhancing...</span>
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
                                    <textarea 
                                        value={experience.description || ""} 
                                        onChange={(e) => updateExperience(index, "description", e.target.value)} 
                                        rows={5} 
                                        className="w-full p-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-700 placeholder-slate-400 resize-none"
                                        placeholder="• Led a team of 5 developers to deliver a new SaaS platform, increasing user engagement by 40%
• Implemented Agile methodologies that reduced development cycle time by 30%
• Optimized database queries, improving application performance by 25%
• Collaborated with product managers to define roadmaps and prioritize features..."
                                        required
                                    />
                                    <div className="text-xs text-slate-500 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M12 16v-4"/>
                                            <path d="M12 8h.01"/>
                                        </svg>
                                        Use bullet points, action verbs, and quantify achievements with numbers
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add More Button */}
                    <div className="pt-4">
                        <button 
                            onClick={addExperience} 
                            className="group w-full py-4 border-2 border-dashed border-slate-300 hover:border-teal-400 rounded-2xl bg-gradient-to-r from-slate-50/50 to-white hover:from-teal-50/30 hover:to-white transition-all duration-300"
                        >
                            <div className="flex flex-col items-center justify-center gap-3">
                                <div className="size-12 rounded-xl bg-gradient-to-br from-slate-100 to-white group-hover:from-teal-100 group-hover:to-white border border-slate-300 group-hover:border-teal-300 flex items-center justify-center transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 group-hover:text-teal-500">
                                        <path d="M5 12h14"/>
                                        <path d="M12 5v14"/>
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <div className="font-semibold text-slate-900 group-hover:text-teal-700">Add Another Experience</div>
                                    <div className="text-sm text-slate-600 group-hover:text-teal-600">Continue building your professional journey</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExperienceForm
