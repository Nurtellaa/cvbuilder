import { Check, Layout } from 'lucide-react'
import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const templates = [
        {
            id: "classic",
            name: "Classic Professional",
            preview: "A timeless, ATS-friendly format that works for all industries",
            style: "Traditional layout with clear hierarchy"
        },
        {
            id: "modern",
            name: "Modern Executive",
            preview: "Contemporary design with strategic color accents and clean typography",
            style: "Sleek sections with visual balance"
        },
        {
            id: "minimal-image",
            name: "Creative Portfolio",
            preview: "Elegant design featuring your photo with minimalist aesthetics",
            style: "Image-focused with clean typography"
        },
        {
            id: "minimal",
            name: "Minimalist",
            preview: "Ultra-clean, content-first approach that emphasizes your achievements",
            style: "Maximum whitespace, minimal distractions"
        },
        {
            id: "executive",
            name: "Executive",
            preview: "Sophisticated layout designed for senior-level professionals",
            style: "Premium typography with refined spacing"
        },
        {
            id: "technical",
            name: "Technical",
            preview: "Optimized for tech roles with clear skills sections and project highlights",
            style: "Structured layout for technical details"
        }
    ]
    
    const selectedTemplateData = templates.find(t => t.id === selectedTemplate) || templates[0];

    return (
        <div className='relative'>
            <button 
                onClick={()=> setIsOpen(!isOpen)} 
                className='group relative flex items-center gap-2 text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-teal-300 transition-all px-4 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md'
            >
                <div className='flex items-center gap-3'>
                    <div className='relative'>
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
                            className="text-teal-600"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                            <line x1="3" x2="21" y1="9" y2="9"/>
                            <line x1="9" x2="9" y1="21" y2="9"/>
                        </svg>
                        <div className='absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                    <span className='font-medium text-slate-700'>Template</span>
                </div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path d="m6 9 6 6 6-6"/>
                </svg>
            </button>
            
            {isOpen && (
                <div className='absolute top-full left-0 mt-2 z-50 bg-white rounded-xl border border-slate-200 shadow-2xl p-4 w-80 transform transition-all duration-300 scale-95 hover:scale-100'>
                    {/* Header */}
                    <div className='mb-6'>
                        <h3 className='font-bold text-slate-900 mb-1 text-lg'>Choose Your Template</h3>
                        <p className='text-sm text-slate-600'>Select a design that matches your industry and career level</p>
                    </div>

                    {/* Template Grid */}
                    <div className='space-y-3 mb-4 max-h-96 overflow-y-auto pr-2'>
                        {templates.map((template) => (
                            <div 
                                key={template.id} 
                                onClick={()=> {onChange(template.id); setIsOpen(false)}} 
                                className={`group relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                                    selectedTemplate === template.id
                                    ? 'border-teal-500 bg-gradient-to-r from-teal-50/50 to-teal-100/30 shadow-lg shadow-teal-100'
                                    : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50/50'
                                }`}
                            >
                                {/* Selected Indicator */}
                                {selectedTemplate === template.id && (
                                    <div className="absolute -top-2 -right-2 size-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
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
                                            className="text-white"
                                        >
                                            <path d="M20 6 9 17l-5-5"/>
                                        </svg>
                                    </div>
                                )}

                                <div className="flex items-start gap-4">

                                    {/* Template Details */}
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className={`font-semibold ${
                                                    selectedTemplate === template.id
                                                    ? 'text-teal-800'
                                                    : 'text-slate-900 group-hover:text-teal-800'
                                                } transition-colors`}>
                                                    {template.name}
                                                </h4>
                                                <div className={`text-xs font-medium px-2 py-1 rounded-full inline-block mt-1 ${
                                                    selectedTemplate === template.id
                                                    ? 'bg-teal-100 text-teal-700'
                                                    : 'bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-600'
                                                } transition-all`}>
                                                    {template.style}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <p className={`text-sm leading-relaxed ${
                                            selectedTemplate === template.id
                                            ? 'text-slate-700'
                                            : 'text-slate-600 group-hover:text-slate-700'
                                        } transition-colors`}>
                                            {template.preview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Template Preview */}
                    <div className='pt-4 border-t border-slate-100'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className={`size-10 rounded-xl flex items-center justify-center text-lg ${
                                    'bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700'
                                }`}>
                                    {selectedTemplateData.icon}
                                </div>
                                <div>
                                    <p className='text-sm font-medium text-slate-900'>Current Template</p>
                                    <p className='text-xs text-slate-500'>{selectedTemplateData.name}</p>
                                </div>
                            </div>
                            <div className='text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg'>
                                ACTIVE
                            </div>
                        </div>
                    </div>

                    {/* Close Button */}
                    <div className='absolute top-3 right-3'>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className='p-1.5 rounded-lg hover:bg-slate-100 transition-colors'
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="text-slate-500"
                            >
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Click Outside Handler */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default TemplateSelector
