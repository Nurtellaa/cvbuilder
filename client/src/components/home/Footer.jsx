import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="relative overflow-hidden bg-gradient-to-b from-white via-teal-50/20 to-white border-t border-teal-100 mt-32">
        {/* Decorative Elements */}
        <div className="absolute -top-20 left-10 size-40 bg-teal-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 size-32 bg-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <a href="#" className="inline-block mb-6 group">
                <img src="/logo.svg" alt="CVBuilder Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
              </a>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-md">
                Your career transformation partner. We help professionals worldwide craft compelling stories that open doors to dream opportunities.
              </p>
              <div className="flex items-center gap-5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-teal-100 rounded-xl hover:bg-teal-50 hover:border-teal-300 hover:scale-110 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-slate-700 group-hover:text-teal-600">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-teal-100 rounded-xl hover:bg-teal-50 hover:border-teal-300 hover:scale-110 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter text-slate-700 group-hover:text-teal-600">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-teal-100 rounded-xl hover:bg-teal-50 hover:border-teal-300 hover:scale-110 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube text-slate-700 group-hover:text-teal-600">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-teal-100 rounded-xl hover:bg-teal-50 hover:border-teal-300 hover:scale-110 transition-all duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-slate-700 group-hover:text-teal-600">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
              {/* Platform */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-teal-600">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    <path d="M5 3v4"/>
                    <path d="M19 17v4"/>
                    <path d="M3 5h4"/>
                    <path d="M17 19h4"/>
                  </svg>
                  Platform
                </h3>
                <ul className="space-y-4">
                  <li><a href="/features" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group">AI Resume Builder <span className="text-xs text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-full px-2 py-0.5 group-hover:scale-105 transition-transform">New</span></a></li>
                  <li><a href="/templates" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">Professional Templates <span className="text-xs text-teal-600">50+</span></a></li>
                  <li><a href="/ats-checker" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">ATS Optimization</a></li>
                  <li><a href="/career-guides" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Career Guides</a></li>
                  <li><a href="/enterprise" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Enterprise Solutions</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text text-teal-600">
                    <path d="M12 7v14"/>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4z"/>
                    <path d="M8 18h.01"/>
                  </svg>
                  Resources
                </h3>
                <ul className="space-y-4">
                  <li><a href="/blog" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Career Blog</a></li>
                  <li><a href="/success-stories" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Success Stories</a></li>
                  <li><a href="/resume-examples" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Resume Examples</a></li>
                  <li><a href="/webinars" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">Live Webinars <span className="text-xs text-white bg-amber-500 rounded-full px-2 py-0.5 animate-pulse">Live</span></a></li>
                  <li><a href="/help-center" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Help Center</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2 text-teal-600">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                    <path d="M10 6h4"/>
                    <path d="M10 10h4"/>
                    <path d="M10 14h4"/>
                    <path d="M10 18h4"/>
                  </svg>
                  Company
                </h3>
                <ul className="space-y-4">
                  <li><a href="/about" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">About Us</a></li>
                  <li><a href="/careers" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">Careers <span className="text-xs text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-full px-2 py-0.5 hover:scale-105 transition-transform">8 Open Roles</span></a></li>
                  <li><a href="/press" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Press & Media</a></li>
                  <li><a href="/contact" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Contact Us</a></li>
                  <li><a href="/partners" className="text-slate-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-300">Partnerships</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-teal-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-slate-600 text-sm">
                  © 2026 CVBuilder. Empowering careers worldwide.
                  <span className="hidden md:inline mx-3">•</span>
                  <span className="block md:inline mt-2 md:mt-0">Transforming job searches into dream careers.</span>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-end">
                <a href="/privacy" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">Terms of Service</a>
                <a href="/cookies" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">Cookie Policy</a>
                <a href="/sitemap" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">Sitemap</a>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-teal-100/50">
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">Trusted by professionals at</div>
                <div className="flex items-center gap-4 opacity-70">
                  <span className="font-medium text-slate-700">Google</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium text-slate-700">Microsoft</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium text-slate-700">Amazon</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-medium text-slate-700">Apple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Footer
