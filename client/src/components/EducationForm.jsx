import { GraduationCap, Plus, Trash2 } from 'lucide-react';
import React from 'react'

const EducationForm = ({ data, onChange }) => {

    const addEducation = () => {
        const newEducation = {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: ""
        };
        onChange([...data, newEducation])
    }

    const removeEducation = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateEducation = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated)
    }

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="mb-4">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-900'>Education Background</h3>
                        <p className='text-slate-600 mt-1'>Showcase your academic achievements and qualifications</p>
                    </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
            </div>

            {/* Empty State */}
            {data.length === 0 ? (
                <div className='text-center py-12 bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border-2 border-dashed border-slate-300'>
                    <div className="inline-flex items-center justify-center size-20 bg-gradient-to-br from-slate-100 to-white rounded-2xl border border-slate-200 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                        </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">No Education Added</h4>
                    <p className="text-slate-600 max-w-md mx-auto mb-8">
                        Add your educational qualifications to demonstrate your academic background and expertise.
                    </p>
                    <button 
                        onClick={addEducation} 
                        className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5v14"/>
                        </svg>
                        Add First Education
                    </button>
                </div>
            ) : (
                <div className='space-y-6'>
                    {/* Education List */}
                    {data.map((education, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-2xl border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            {/* Education Header */}
                            <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-200 flex items-center justify-center">
                                            <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">Education #{index + 1}</h4>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => removeEducation(index)} 
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

                            {/* Education Form */}
                            <div className="p-6 space-y-6">
                                {/* Institution & Degree */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                <circle cx="12" cy="10" r="3"/>
                                            </svg>
                                            Institution Name *
                                        </label>
                                        <input 
                                            value={education.institution || ""} 
                                            onChange={(e) => updateEducation(index, "institution", e.target.value)} 
                                            type="text" 
                                            placeholder="e.g., Stanford University, MIT, Harvard University" 
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
                                            Degree Level *
                                        </label>
                                        <select 
                                            value={education.degree || ""} 
                                            onChange={(e) => updateEducation(index, "degree", e.target.value)} 
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">Select Degree Level</option>
                                            <option value="High School Diploma">High School Diploma</option>
                                            <option value="Associate's Degree">Associate's Degree</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                                            <option value="Professional Certification">Professional Certification</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Field of Study & Graduation Date */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <path d="m12 14-2-2-2-1-1-1-1-.5L5 9l-1 1 1 1 1 1 1 1 2 1 2 2 3-1 3 1 2-2 2-1 1-1 1-1-1-1-1.5-.5-1 1-1 1-2 1-3 1Z"/>
                                                <path d="M9 3 5 9l2 2 2 1 3-1 3 1 2-1 2-2-4-6Z"/>
                                                <path d="m12 14-3 1-3-1"/>
                                            </svg>
                                            Field of Study *
                                        </label>
                                        <input 
                                            value={education.field || ""} 
                                            onChange={(e) => updateEducation(index, "field", e.target.value)} 
                                            type="text" 
                                            placeholder="e.g., Computer Science, Business Administration, Mechanical Engineering" 
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
                                            Graduation Date *
                                        </label>
                                        <input 
                                            value={education.graduation_date || ""} 
                                            onChange={(e) => updateEducation(index, "graduation_date", e.target.value)} 
                                            type="month" 
                                            className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* GPA & Additional Info */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                            <path d="M12 2v20"/>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                        </svg>
                                        GPA (Optional)
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <input 
                                            value={education.gpa || ""} 
                                            onChange={(e) => updateEducation(index, "gpa", e.target.value)} 
                                            type="text" 
                                            placeholder="e.g., 3.8/4.0, 4.0 GPA, Magna Cum Laude" 
                                            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all placeholder-slate-400"
                                        />
                                        <div className="text-xs text-slate-500 bg-slate-100 px-3 py-2 rounded-lg">
                                            Include if 3.5+
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Info Section */}
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
                                            <h5 className="font-semibold text-slate-900 mb-1">Education Tips</h5>
                                            <div className="text-sm text-slate-600 space-y-1">
                                                <p>• Include relevant coursework if you're a recent graduate</p>
                                                <p>• List academic honors or awards (Dean's List, scholarships)</p>
                                                <p>• Mention study abroad programs or relevant extracurriculars</p>
                                                <p>• For ongoing education, use "Expected Graduation: [Date]"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add More Button */}
                    <div className="pt-4">
                        <button 
                            onClick={addEducation} 
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
                                    <div className="font-semibold text-slate-900 group-hover:text-teal-700">Add Another Education</div>
                                    <div className="text-sm text-slate-600 group-hover:text-teal-600">Include all relevant degrees and certifications</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EducationForm
