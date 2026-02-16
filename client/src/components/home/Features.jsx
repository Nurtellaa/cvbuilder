import React from 'react'

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);

return (
    <div id='features' className='flex flex-col items-center my-28 scroll-mt-20'>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
            {/* Section Badge */}
            <div className="flex items-center gap-2 text-sm font-semibold text-teal-700 bg-gradient-to-r from-teal-50 to-teal-100 rounded-full px-5 py-2.5 mb-6 border border-teal-200 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
                </svg>
                <span>Streamlined Process</span>
            </div>
            
            {/* Section Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Craft Your Perfect Resume in <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Four Simple Steps</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-12">
                Transform your career journey with our intuitive platform. From blank page to interview-ready resume in minutes—powered by smart AI guidance.
            </p>
        </div>

        {/* Feature Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-8 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Image Section */}
            <div className="lg:w-1/2">
                <div className="relative group">
                    <img 
                        className="w-full rounded-2xl shadow-xl border border-teal-100/50 group-hover:shadow-2xl transition-all duration-500" 
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="CV Builder dashboard showing real-time resume editing interface" 
                    />
                    <div className="absolute -inset-4 bg-gradient-to-r from-teal-200/20 to-cyan-200/10 rounded-3xl blur-xl -z-10 group-hover:from-teal-300/30 group-hover:to-cyan-300/20 transition-all duration-500"></div>
                </div>
            </div>

            {/* Features List */}
            <div className="lg:w-1/2 space-y-6">
                <div className="group p-6 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                     onMouseEnter={() => setIsHover(true)} 
                     onMouseLeave={() => setIsHover(false)}>
                    <div className="flex items-start gap-5">
                        <div className={`p-3 rounded-xl ${!isHover ? 'bg-teal-50 border border-teal-200' : 'bg-white border border-teal-300'} group-hover:bg-teal-50 transition-all duration-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-teal-600">
                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors duration-300">
                                AI-Powered Optimization
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Get instant feedback on your resume's effectiveness with smart AI analysis tailored to your target industry.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group p-6 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-5">
                        <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 group-hover:bg-teal-100 group-hover:border-teal-300 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-teal-600">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors duration-300">
                                Professional Templates
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Choose from industry-specific designs that pass ATS screening and impress hiring managers at first glance.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group p-6 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-5">
                        <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 group-hover:bg-teal-100 group-hover:border-teal-300 transition-all duration-300">
                            <svg className="size-6 stroke-teal-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 15V3" />
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <path d="m7 10 5 5 5-5" />
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors duration-300">
                                One-Click Export
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Download your resume in PDF format ready to submit to job portals and recruiters instantly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group p-6 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start gap-5">
                        <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 group-hover:bg-teal-100 group-hover:border-teal-300 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-teal-600">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors duration-300">
                                Expert Guidance
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Get actionable tips from career experts and industry-specific recommendations to maximize your interview chances.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Features
