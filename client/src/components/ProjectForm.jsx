import { Plus, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ProjectForm = ({ data, onChange }) => {
    const { token } = useSelector(state => state.auth)
    const [generatingIndex, setGeneratingIndex] = useState(-1)

    const addProject = () => {
        const newProject = {
            name: "",
            type: "",
            description: "",
            link: "",
            technologies: ""
        };
        onChange([...data, newProject])
    }

    const removeProject = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateProject = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }

    const generateDescription = async (index) => {
        setGeneratingIndex(index)
        const project = data[index]
        const prompt = `enhance this project description for "${project.name}" (${project.type} project using ${project.technologies}): ${project.description}`

        try {
            const { data } = await api.post('api/ai/enhance-job-desc', { userContent: prompt }, { headers: { Authorization: token } })
            updateProject(index, "description", data.enhancedContent)
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
                            <path d="m12 18 4-5-4-5-4 5z"/>
                            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/>
                            <path d="M21 7v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/>
                            <path d="M18 13v-2"/>
                            <path d="M18 21v-2"/>
                            <path d="M18 3v2"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-900'>Projects & Portfolio</h3>
                        <p className='text-slate-600 mt-1'>Showcase your hands-on experience and technical skills</p>
                    </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
            </div>

            {/* Projects List */}
            <div className='space-y-6'>
                {data.map((project, index) => (
                    <div 
                        key={index} 
                        className="group relative bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                        {/* Project Header */}
                        <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-200 flex items-center justify-center">
                                        <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Project #{index + 1}</h4>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => removeProject(index)} 
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

                        {/* Project Form */}
                        <div className="p-6 space-y-6">
                            {/* Project Name & Type */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                            <path d="M3 9h18"/>
                                            <path d="M9 21V9"/>
                                        </svg>
                                        Project Name *
                                    </label>
                                    <input 
                                        value={project.name || ""} 
                                        onChange={(e) => updateProject(index, "name", e.target.value)} 
                                        type="text" 
                                        placeholder="e.g., E-Commerce Platform, Mobile App, Data Analysis Dashboard" 
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                        </svg>
                                        Project Type
                                    </label>
                                    <select 
                                        value={project.type || ""} 
                                        onChange={(e) => updateProject(index, "type", e.target.value)} 
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select Project Type</option>
                                        <option value="Personal Project">Personal Project</option>
                                        <option value="Academic Project">Academic Project</option>
                                        <option value="Open Source Contribution">Open Source Contribution</option>
                                        <option value="Freelance Work">Freelance Work</option>
                                        <option value="Hackathon Project">Hackathon Project</option>
                                        <option value="Professional Work">Professional Work</option>
                                        <option value="Research Project">Research Project</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Technologies & Link */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                            <path d="M12 2v4"/>
                                            <path d="m5.2 5.2 2.8 2.8"/>
                                            <path d="M18.8 5.2 16 8"/>
                                            <path d="M2 12h4"/>
                                            <path d="m5.2 18.8 2.8-2.8"/>
                                            <path d="M18.8 18.8 16 16"/>
                                            <path d="M22 12h-4"/>
                                            <circle cx="12" cy="12" r="4"/>
                                        </svg>
                                        Technologies Used
                                    </label>
                                    <input 
                                        value={project.technologies || ""} 
                                        onChange={(e) => updateProject(index, "technologies", e.target.value)} 
                                        type="text" 
                                        placeholder="e.g., React, Node.js, Python, AWS, PostgreSQL" 
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                        </svg>
                                        Project Link (Optional)
                                    </label>
                                    <input 
                                        value={project.link || ""} 
                                        onChange={(e) => updateProject(index, "link", e.target.value)} 
                                        type="url" 
                                        placeholder="https://github.com/username/project or https://project-demo.com" 
                                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Project Description */}
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
                                            Project Description & Achievements *
                                        </label>
                                    </div>
                                    <button 
                                        onClick={() => generateDescription(index)} 
                                        disabled={generatingIndex === index || !project.name || !project.description} 
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
                                    rows={5} 
                                    value={project.description || ""} 
                                    onChange={(e) => updateProject(index, "description", e.target.value)} 
                                    placeholder="• Developed a full-stack e-commerce platform using React and Node.js that processed 500+ daily transactions
• Implemented responsive design that increased mobile conversion rate by 35%
• Integrated Stripe payment processing and automated email notifications
• Reduced page load time by 40% through code optimization and caching strategies
• Collaborated with a team of 3 developers using Agile methodology and GitHub for version control..."
                                    className="w-full p-4 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-700 placeholder-slate-400 resize-none"
                                    required
                                />
                                <div className="text-xs text-slate-500 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 16v-4"/>
                                        <path d="M12 8h.01"/>
                                    </svg>
                                    Use bullet points, quantify results, and mention specific technologies
                                </div>
                            </div>

                            {/* Project Tips */}
                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50/50 to-white rounded-xl border border-slate-200">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M12 16v-4"/>
                                            <path d="M12 8h.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-slate-900 mb-1">Project Showcase Tips</h5>
                                        <div className="text-sm text-slate-600 space-y-1">
                                            <p>• Focus on projects most relevant to the job you're applying for</p>
                                            <p>• Quantify your impact with numbers and metrics</p>
                                            <p>• Mention challenges overcome and solutions implemented</p>
                                            <p>• Include links to GitHub, live demos, or portfolio websites</p>
                                            <p>• Highlight both technical skills and soft skills demonstrated</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Empty State or Add More Button */}
                {data.length === 0 ? (
                    <div className='text-center py-12 bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border-2 border-dashed border-slate-300'>
                        <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                                <path d="m12 18 4-5-4-5-4 5z"/>
                                <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/>
                                <path d="M21 7v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/>
                                <path d="M18 13v-2"/>
                                <path d="M18 21v-2"/>
                                <path d="M18 3v2"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-slate-900 mb-3">No Projects Added</h4>
                        <p className="text-slate-600 max-w-md mx-auto mb-8">
                            Projects demonstrate your practical skills and initiative. They're especially valuable for technical roles and early-career professionals.
                        </p>
                        <button 
                            onClick={addProject} 
                            className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"/>
                                <path d="M12 5v14"/>
                            </svg>
                            Add Your First Project
                        </button>
                    </div>
                ) : (
                    <div className="pt-4">
                        <button 
                            onClick={addProject} 
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
                                    <div className="font-semibold text-slate-900 group-hover:text-teal-700">Add Another Project</div>
                                    <div className="text-sm text-slate-600 group-hover:text-teal-600">Showcase the breadth of your technical experience</div>
                                </div>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectForm