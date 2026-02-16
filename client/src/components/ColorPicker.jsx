import { Check, Palette } from 'lucide-react';
import React, { useState } from 'react'

const ColorPicker = ({selectedColor, onChange }) => {
    const colors = [
        { name: "Ocean Teal", value: "#0d9488", gradient: "from-teal-500 to-teal-600" },
        { name: "Deep Blue", value: "#3B82F6", gradient: "from-blue-500 to-blue-600" },
        { name: "Royal Indigo", value: "#6366F1", gradient: "from-indigo-500 to-indigo-600" },
        { name: "Violet Dream", value: "#8B5CF6", gradient: "from-violet-500 to-violet-600" },
        { name: "Emerald Green", value: "#10B981", gradient: "from-emerald-500 to-emerald-600" },
        { name: "Coral Red", value: "#EF4444", gradient: "from-red-500 to-red-600" },
        { name: "Sunset Orange", value: "#F97316", gradient: "from-orange-500 to-orange-600" },
        { name: "Blush Pink", value: "#EC4899", gradient: "from-pink-500 to-pink-600" },
        { name: "Slate Gray", value: "#6B7280", gradient: "from-gray-500 to-gray-600" },
        { name: "Midnight", value: "#1F2937", gradient: "from-gray-800 to-gray-900" },
        { name: "Sky Cyan", value: "#06B6D4", gradient: "from-cyan-500 to-cyan-600" },
        { name: "Amber Gold", value: "#F59E0B", gradient: "from-amber-500 to-amber-600" }
    ]

    const [isOpen, setIsOpen] = useState(false);
    
    const currentColor = colors.find(c => c.value === selectedColor) || colors[0];

    return (
        <div className='relative'>
            <button 
                onClick={()=> setIsOpen(!isOpen)} 
                className='group relative flex items-center gap-2 text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-teal-300 transition-all px-4 py-2.5 rounded-xl font-medium shadow-sm hover:shadow-md'
            >
                <div className='flex items-center gap-3'>
                    <div className='relative'>
                        <div 
                            className='size-5 rounded-lg border border-slate-200 shadow-sm'
                            style={{backgroundColor: selectedColor}}
                        ></div>
                        <div className='absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                    <span className='font-medium text-slate-700'>Accent Color</span>
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
                <div className='absolute top-full left-0 mt-2 z-50 bg-white rounded-xl border border-slate-200 shadow-2xl p-4 w-72 transform transition-all duration-300 scale-95 hover:scale-100'>
                    {/* Header */}
                    <div className='mb-4'>
                        <h3 className='font-semibold text-slate-900 mb-1'>Choose Accent Color</h3>
                        <p className='text-sm text-slate-600'>Sets the primary color theme for your resume</p>
                    </div>

                    {/* Color Grid */}
                    <div className='grid grid-cols-4 gap-3 mb-4'>
                        {colors.map((color)=>(
                            <div 
                                key={color.value} 
                                className='relative cursor-pointer group flex flex-col items-center' 
                                onClick={()=> {onChange(color.value); setIsOpen(false)}}
                            >
                                {/* Color Swatch */}
                                <div className={`relative size-10 rounded-xl border-2 transition-all duration-300 group-hover:scale-110 group-active:scale-95 ${
                                    selectedColor === color.value 
                                    ? 'border-slate-800 shadow-lg' 
                                    : 'border-slate-200 hover:border-slate-400'
                                }`}>
                                    <div 
                                        className="w-full h-full rounded-lg"
                                        style={{backgroundColor: color.value}}
                                    >
                                        {selectedColor === color.value && (
                                            <div className='absolute inset-0 flex items-center justify-center'>
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
                                                    className="text-white drop-shadow-md"
                                                >
                                                    <path d="M20 6 9 17l-5-5"/>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    {/* Hover Gradient Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${color.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                                </div>
                                
                                {/* Color Name */}
                                <p className={`text-xs text-center mt-2 font-medium ${
                                    selectedColor === color.value 
                                    ? 'text-slate-900 font-semibold' 
                                    : 'text-slate-600 group-hover:text-slate-900'
                                } transition-colors`}>
                                    {color.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Selected Color Preview */}
                    <div className='pt-4 border-t border-slate-100'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div 
                                    className='size-8 rounded-lg border border-slate-200 shadow-sm'
                                    style={{backgroundColor: selectedColor}}
                                ></div>
                                <div>
                                    <p className='text-sm font-medium text-slate-900'>Selected Color</p>
                                    <p className='text-xs text-slate-500'>{currentColor.name}</p>
                                </div>
                            </div>
                            <div className='text-sm font-mono text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg'>
                                {selectedColor.toUpperCase()}
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

export default ColorPicker
