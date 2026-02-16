import React from 'react'

const Banner = () => {
  return ( 
    <div className="w-full py-4 font-medium text-center bg-gradient-to-r from-teal-50 via-white to-teal-50 border-b border-teal-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-3 bg-white rounded-2xl px-5 py-2.5 shadow-sm border border-teal-100">
            <span className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-teal-500 to-teal-600 text-xs font-bold tracking-wide shadow-sm">
              JUST LAUNCHED
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <span className="font-bold text-teal-900 text-sm md:text-base tracking-tight">
                ✨ AI-Powered CV Builder
              </span>
              <span className="text-teal-600 text-xs md:text-sm font-medium tracking-normal max-w-xs">
                Craft professional CVs in minutes with AI enhancement
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner