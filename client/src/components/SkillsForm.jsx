import { Plus, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'

const SkillsForm = ({ data, onChange }) => {
    const [newSkill, setNewSkill] = useState("")

    const addSkill = () => {
        if(newSkill.trim() && !data.includes(newSkill.trim())){
            onChange([...data, newSkill.trim()])
            setNewSkill("")
        }
    }

    const removeSkill = (indexToRemove) => {
        onChange(data.filter((_, index) => index !== indexToRemove))
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            e.preventDefault();
            addSkill();
        }
    }

    // Suggested skills for quick adding
    const suggestedSkills = [
        "React", "Python", "JavaScript", "Node.js", "TypeScript", 
        "AWS", "Docker", "Agile", "Leadership", "Communication",
        "Project Management", "UI/UX Design", "Data Analysis", "Machine Learning"
    ]

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                            <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/>
                            <path d="m21 12-2.846-.813a4.5 4.5 0 0 1-3.09-3.09L15 5.25l.813 2.846a4.5 4.5 0 0 1 3.09 3.09L21.75 12l-2.846.813a4.5 4.5 0 0 1-3.09 3.09L15 18.75l.813-2.846a4.5 4.5 0 0 1 3.09-3.09L21 12Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-900'>Skills & Expertise</h3>
                        <p className='text-slate-600 mt-1'>Showcase your technical abilities and professional competencies</p>
                    </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
            </div>

            {/* Add Skill Section */}
            <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
                <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-slate-100 to-white border border-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                                <path d="M12 2v20"/>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                            </svg>
                        </div>
                        Add Your Skills
                    </h4>
                    <p className="text-slate-600">Include both technical skills and soft skills relevant to your target roles</p>
                </div>

                {/* Skill Input */}
                <div className="flex gap-3 mb-6">
                    <div className="relative flex-1">
                        <input 
                            type="text" 
                            placeholder="Enter a skill (e.g., JavaScript, Project Management, Data Analysis)" 
                            className='w-full px-4 py-3.5 pl-12 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400 hover:border-slate-400'
                            onChange={(e) => setNewSkill(e.target.value)}
                            value={newSkill}
                            onKeyDown={handleKeyPress}
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                                <path d="m9.813 15.904 4.187-2.904 4.187 2.904-1.6-4.925 4.187-2.903h-5.174l-1.6-4.925-1.6 4.925H7.226l4.187 2.903-1.6 4.925Z"/>
                            </svg>
                        </div>
                    </div>
                    <button 
                        onClick={addSkill} 
                        disabled={!newSkill.trim()} 
                        className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                        Add Skill
                    </button>
                </div>

                {/* Suggested Skills */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-semibold text-slate-700">Quick Add Suggestions</h5>
                        <span className="text-xs text-slate-500">Click to add</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {suggestedSkills.map((skill, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!data.includes(skill)) {
                                        onChange([...data, skill])
                                    }
                                }}
                                disabled={data.includes(skill)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                    data.includes(skill)
                                    ? 'bg-teal-100 text-teal-700 border border-teal-200 cursor-default'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                {skill}
                                {data.includes(skill) && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="inline ml-1.5 text-teal-600">
                                        <path d="M20 6 9 17l-5-5"/>
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skill Categories */}
                <div className="p-4 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 rounded-xl border border-teal-200">
                    <h5 className="font-semibold text-teal-900 mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 16v-4"/>
                            <path d="M12 8h.01"/>
                        </svg>
                        Skill Categories to Consider
                    </h5>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div className="font-medium text-slate-700 mb-1">Technical Skills</div>
                            <div className="text-slate-600 space-y-0.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Programming Languages
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Frameworks & Libraries
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Tools & Platforms
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-slate-700 mb-1">Professional Skills</div>
                            <div className="text-slate-600 space-y-0.5">
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Project Management
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Communication
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="size-1.5 rounded-full bg-teal-500"></div>
                                    Leadership & Teamwork
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Display Section */}
            <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Your Skills ({data.length})</h4>
                            <p className="text-slate-600">Ideal: 8-12 relevant skills for maximum impact</p>
                        </div>
                        <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                            {data.length}/12 skills
                        </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-500"
                                style={{ width: `${Math.min((data.length / 12) * 100, 100)}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>Add more skills</span>
                            <span>Optimal range</span>
                        </div>
                    </div>
                </div>

                {/* Skills List */}
                {data.length > 0 ? (
                    <div className='flex flex-wrap gap-3'>
                        {data.map((skill, index) => (
                            <div 
                                key={index} 
                                className="group relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 rounded-xl border border-teal-200 hover:border-teal-300 transition-all duration-300"
                            >
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span className="font-medium">{skill}</span>
                                </div>
                                <button 
                                    onClick={() => removeSkill(index)} 
                                    className="ml-1 p-1 hover:bg-teal-200 rounded-lg transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-700">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-8'>
                        <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                                <path d="m9.813 15.904 4.187-2.904 4.187 2.904-1.6-4.925 4.187-2.903h-5.174l-1.6-4.925-1.6 4.925H7.226l4.187 2.903-1.6 4.925Z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-slate-900 mb-3">No Skills Added Yet</h4>
                        <p className="text-slate-600 max-w-md mx-auto mb-8">
                            Start by adding your key skills above. Skills are crucial for getting past automated screening systems and showing recruiters your qualifications.
                        </p>
                    </div>
                )}

                {/* Skills Tips */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4"/>
                                <path d="M12 8h.01"/>
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-900 mb-1">Skill Optimization Tips</h5>
                            <div className="text-sm text-slate-600 space-y-1">
                                <p>• <strong>Prioritize relevant skills</strong> for the jobs you're targeting</p>
                                <p>• <strong>Mix technical and soft skills</strong> to show well-rounded abilities</p>
                                <p>• <strong>Use industry-standard terminology</strong> that ATS systems recognize</p>
                                <p>• <strong>Order skills by proficiency level</strong> or group them by category</p>
                                <p>• <strong>Update skills regularly</strong> to reflect current industry trends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm
