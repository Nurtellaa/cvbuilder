import React from 'react'

const CallToAction = () => {
  return (
    <div id='cta' className='w-full max-w-6xl mx-auto px-4 sm:px-6 mt-32 mb-24'>
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-teal-400/10 to-teal-300/5 rounded-3xl blur-3xl -z-10"></div>
        <div className="absolute -top-6 -left-6 size-24 bg-teal-300/20 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-6 -right-6 size-28 bg-teal-400/20 rounded-full blur-2xl -z-10"></div>
        
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-white to-teal-50/30 rounded-2xl border border-teal-200/50 shadow-2xl overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="relative backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-12 md:px-16 md:py-16">
              {/* Text Content */}
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 bg-teal-50 rounded-full px-4 py-2 mb-6 border border-teal-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                  <span>Limited Time Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Launch Your Dream Career 
                  <span className="block bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent mt-2">
                    Today, Not Tomorrow
                  </span>
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Stop sending resumes into the void. Create an interview-winning CV in 15 minutes with our AI-powered builder. 
                  Join thousands who transformed their job search.
                </p>
                
                {/* Benefits List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="size-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-teal-600">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="size-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-teal-600">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Free professional templates</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="size-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-teal-600">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">ATS optimization included</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="size-6 rounded-full bg-teal-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-teal-600">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Expert career guidance</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button Section */}
              <div className="flex flex-col items-center lg:items-end gap-6">
                <div className="text-center lg:text-right">
                  <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-2xl mb-4 shadow-lg">
                    <span className="text-3xl font-bold">Free</span>
                    <span className="text-sm opacity-90">forever plan</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">
                    Upgrade anytime for advanced features
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://prebuiltui.com" className="group relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-w-[200px]">
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative">Start Building Free</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>
                  
                  <a href="#features" className="group border-2 border-teal-200 hover:border-teal-300 text-teal-800 hover:text-teal-900 font-semibold py-4 px-8 rounded-full hover:bg-teal-50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-w-[180px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-circle mr-3">
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="10 8 16 12 10 16 10 8"/>
                    </svg>
                    <span className="relative">Watch Demo</span>
                  </a>
                </div>
                
                <p className="text-xs text-slate-500 text-center lg:text-right max-w-xs">
                  Join 10,000+ professionals who already launched their careers with CVBuilder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
