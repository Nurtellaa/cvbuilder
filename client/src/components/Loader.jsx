import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm'>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Loader */}
        <div className="relative">
          {/* Outer Ring */}
          <div className='size-20 border-4 border-slate-200 rounded-full'></div>
          
          {/* Animated Ring */}
          <div className='absolute inset-0 size-20 border-4 border-t-transparent border-r-transparent border-b-transparent border-teal-500 rounded-full animate-spin'></div>
          
          {/* Inner Ring */}
          <div className='absolute inset-2 size-16 border-4 border-slate-100 rounded-full'></div>
          
          {/* Spinning Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="size-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg shadow-teal-500/30"></div>
          </div>
          
          {/* Center Logo/Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-10 bg-gradient-to-br from-teal-50 to-white rounded-xl flex items-center justify-center border border-teal-100 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 animate-pulse">Loading Your Content</h3>
          <p className="text-sm text-slate-600 max-w-xs">Preparing your professional experience...</p>
          
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="size-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="size-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="size-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        
        {/* Subtle Branding */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300"></div>
            <span>CVBuilder</span>
            <div className="h-px w-8 bg-gradient-to-r from-slate-300 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
