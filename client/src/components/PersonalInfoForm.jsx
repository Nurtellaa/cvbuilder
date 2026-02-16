import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({data, onChange, removeBackground, setRemoveBackground}) => {

    const handleChange = (field, value)=>{
        onChange({...data, [field]: value})
    }

    const fields = [
        {key: "full_name", label: "Full Name", icon: User, type: "text", required: true, placeholder: "Johnathan Smith"},
        {key: "email", label: "Email Address", icon: Mail, type: "email", required: true, placeholder: "johnathan@example.com"},
        { key: "phone", label: "Phone Number", icon: Phone, type: "tel", placeholder: "+1 (555) 123-4567" },
        { key: "location", label: "Location", icon: MapPin, type: "text", placeholder: "San Francisco, CA" },
        { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text", placeholder: "Senior Product Designer" },
        { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url", placeholder: "linkedin.com/in/yourprofile" },
        { key: "website", label: "Portfolio Website", icon: Globe, type: "url", placeholder: "yourportfolio.com" }
    ]

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="mb-2">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-slate-900'>Personal Information</h3>
                        <p className='text-slate-600 mt-1'>Tell employers who you are and how to contact you</p>
                    </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"></div>
            </div>

            {/* Profile Image Section */}
            <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    {/* Image Upload Area */}
                    <div className="flex-shrink-0">
                        <label className="group relative cursor-pointer block">
                            <div className={`relative overflow-hidden rounded-2xl border-2 border-dashed ${
                                data.image 
                                ? 'border-transparent' 
                                : 'border-slate-300 hover:border-teal-400'
                            } transition-all duration-300`}>
                                {data.image ? (
                                    <div className="relative">
                                        <img 
                                            src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} 
                                            alt="Profile" 
                                            className='w-32 h-32 object-cover rounded-xl'
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                                                <path d="M11 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                                <path d="M21 12c0 3.866-3.582 7-8 7-4.418 0-8-3.134-8-7s3.582-7 8-7c4.418 0 8 3.134 8 7Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 flex flex-col items-center justify-center gap-3 text-center p-4 hover:bg-slate-50 transition-colors rounded-xl">
                                        <div className="size-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-teal-100 group-hover:to-teal-200 transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-teal-500">
                                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/>
                                                <line x1="16" x2="22" y1="5" y2="5"/>
                                                <line x1="19" x2="19" y1="2" y2="8"/>
                                                <circle cx="9" cy="9" r="2"/>
                                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-700">Add Photo</p>
                                            <p className="text-xs text-slate-500 mt-1">400×400px</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <input 
                                type="file" 
                                accept="image/jpeg, image/png, image/webp" 
                                className="hidden" 
                                onChange={(e)=>handleChange("image", e.target.files[0])}
                            />
                        </label>
                    </div>

                    {/* Image Settings */}
                    <div className="flex-1 space-y-4">
                        {typeof data.image === 'object' && (
                            <div className="bg-gradient-to-r from-teal-50/50 to-teal-100/30 rounded-xl border border-teal-200 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-lg bg-gradient-to-br from-teal-100 to-white border border-teal-200 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-teal-900">Background Removal</h4>
                                            <p className="text-sm text-teal-700/80">AI-powered background removal for professional look</p>
                                        </div>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            onChange={()=>setRemoveBackground(prev => !prev)} 
                                            checked={removeBackground}
                                        />
                                        <div className='w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-teal-500 transition-colors duration-300 shadow-inner'></div>
                                        <div className='absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out peer-checked:translate-x-6'></div>
                                    </label>
                                </div>
                            </div>
                        )}

                        <div className="text-sm text-slate-600 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-teal-500"></div>
                                <span>Professional headshots increase interview chances</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-teal-500"></div>
                                <span>Use a clear, well-lit photo facing the camera</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Form */}
            <div className="bg-gradient-to-r from-slate-50/50 to-white rounded-2xl border border-slate-200 p-6">
                <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-slate-100 to-white border border-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
                                <rect width="20" height="16" x="2" y="4" rx="2"/>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>
                        </div>
                        Contact Information
                    </h4>
                    <p className="text-slate-600">Ensure employers can reach you easily</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fields.map((field) => {
                        const Icon = field.icon;
                        const isRequired = field.required;
                        
                        return (
                            <div key={field.key} className='group'>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                        <div className="p-1.5 rounded-md bg-gradient-to-br from-slate-100 to-white group-hover:from-teal-50 group-hover:to-white transition-all">
                                            <Icon className="size-4 text-slate-600 group-hover:text-teal-600 transition-colors"/>
                                        </div>
                                        {field.label}
                                        {isRequired && <span className="text-red-500 ml-1">*</span>}
                                    </label>
                                    {isRequired && (
                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Required</span>
                                    )}
                                </div>
                                <input 
                                    type={field.type} 
                                    value={data[field.key] || ""} 
                                    onChange={(e)=>handleChange(field.key, e.target.value)} 
                                    className='w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-700 placeholder-slate-400 hover:border-slate-400'
                                    placeholder={field.placeholder}
                                    required={isRequired}
                                />
                            </div>
                        )
                    })}
                </div>

                {/* Form Tips */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 16v-4"/>
                                <path d="M12 8h.01"/>
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-semibold text-slate-900 mb-1">Pro Tips for Best Results</h5>
                            <div className="text-sm text-slate-600 space-y-1">
                                <p>• Use a professional email address (avoid nicknames)</p>
                                <p>• Include a LinkedIn profile to showcase endorsements</p>
                                <p>• Keep your portfolio website updated with recent work</p>
                                <p>• Use a professional phone number with voicemail set up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoForm
