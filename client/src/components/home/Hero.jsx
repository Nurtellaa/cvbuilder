import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {

    const {user} = useSelector(state => state.auth)

    const [menuOpen, setMenuOpen] = React.useState(false);

    const logos = [
        '/src/assets/companies-logo/instagram.svg',
        '/src/assets/companies-logo/framer.png',
        '/src/assets/companies-logo/microsoft.svg',
        '/src/assets/companies-logo/huawei.png',
        '/src/assets/companies-logo/reddit.svg',
    ]

return (
    <>
    <div className="min-h-screen pb-20 bg-gradient-to-b from-white via-white to-teal-50/20">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-40 bg-white/95 backdrop-blur-md border-b border-teal-100/50 shadow-sm">
            <a href="https://prebuiltui.com" className="group">
                <img src="/logo.svg" alt="CVBuilder Logo" className="h-12 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105"/>
            </a>

            <div className="hidden md:flex items-center gap-10 text-slate-700">
                <a href="#" className="hover:text-teal-600 transition-all duration-200 font-medium hover:scale-105 group relative">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#features" className="hover:text-teal-600 transition-all duration-200 font-medium hover:scale-105 group relative">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#testimonials" className="hover:text-teal-600 transition-all duration-200 font-medium hover:scale-105 group relative">
                    Success Stories
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#cta" className="hover:text-teal-600 transition-all duration-200 font-medium hover:scale-105 group relative">
                    Get in Touch
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
            </div>

            <div className="flex gap-3">
                <Link to='/app?state=register' className="hidden md:block px-7 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 active:scale-95 transition-all duration-300 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5" hidden={user}>
                    Start Building Free
                </Link>
                <Link to='/app?state=login' className="hidden md:block px-7 py-3 border border-slate-300 active:scale-95 hover:bg-teal-50/50 hover:border-teal-300 transition-all duration-300 rounded-full text-slate-700 hover:text-teal-800 font-medium shadow-sm" hidden={user}>
                    Sign In
                </Link>
                <Link to='/app' className='hidden md:block px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 active:scale-95 transition-all duration-300 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5' hidden={!user}>
                    Go to Dashboard
                </Link>
            </div>

            <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition-all duration-300 p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100" >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" className="lucide lucide-menu text-teal-700" >
                    <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
            </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-teal-900/95 to-teal-800/95 text-white backdrop-blur-lg flex flex-col items-center justify-center text-xl gap-10 md:hidden transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`} >
            <div className="flex flex-col items-center gap-8">
                <a href="#" className="hover:text-teal-300 transition-all duration-300 py-3 font-semibold text-2xl hover:scale-105">
                    Home
                </a>
                <a href="#features" className="hover:text-teal-300 transition-all duration-300 py-3 font-semibold text-2xl hover:scale-105">
                    Features
                </a>
                <a href="#testimonials" className="hover:text-teal-300 transition-all duration-300 py-3 font-semibold text-2xl hover:scale-105">
                    Success Stories
                </a>
                <a href="#contact" className="hover:text-teal-300 transition-all duration-300 py-3 font-semibold text-2xl hover:scale-105">
                    Get in Touch
                </a>
            </div>
            
            <div className="flex gap-4 mt-8">
                <Link to='/app' className="px-8 py-3 bg-white text-teal-900 font-semibold rounded-full hover:bg-teal-50 transition-all duration-300">
                    Get Started
                </Link>
                <Link to='/app?state=login' className="px-8 py-3 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                    Sign In
                </Link>
            </div>
            
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 active:ring-4 active:ring-teal-300/30 aspect-square size-12 p-2.5 items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-white rounded-full flex border border-white/30" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-40 text-black pt-8 md:pt-16">
            {/* Background Effects */}
            <div className="absolute top-10 xl:top-0 -z-10 left-1/4 size-80 sm:size-96 xl:size-120 2xl:size-132 bg-gradient-to-r from-teal-200/40 to-cyan-300/30 blur-[140px] opacity-40 rounded-full"></div>
            <div className="absolute -right-20 top-1/3 -z-10 size-80 bg-gradient-to-l from-teal-100/30 to-cyan-200/20 blur-[120px] opacity-30 rounded-full"></div>

            {/* Avatar Section - Fixed */}
            <div className="flex items-center mt-12 bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-teal-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex -space-x-4 pr-5">
                    {[
                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                        "https://images.unsplash.com/photo-1687356356861-bd761c683829?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1606752445153-beb5c9d03ae8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ].map((src, index) => (
                        <img 
                            key={index}
                            src={src}
                            alt={`User ${index + 1}`}
                            className="size-11 object-cover rounded-full border-4 border-white shadow-md hover:-translate-y-1 transition-all duration-300"
                            style={{ zIndex: 5 - index }}
                        />
                    ))}
                </div>

                <div className="pl-4 border-l border-teal-100/50">
                    <div className="flex gap-0.5 mb-1.5">
                        {Array(5).fill(0).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-amber-400 drop-shadow-sm" aria-hidden="true">
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                        ))}
                    </div>
                    <p className="text-sm text-teal-800 font-semibold tracking-tight">
                        Join 10,000+ professionals who landed dream jobs
                    </p>
                </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black max-w-6xl text-center mt-10 md:mt-16 md:leading-[90px] lg:leading-[100px] tracking-tight">
                Your Dream Career 
                <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 bg-clip-text text-transparent mt-2 md:mt-4">
                    Starts Here
                </span>
            </h1>

            <p className="max-w-2xl text-center text-xl text-slate-600 my-10 md:my-12 leading-relaxed font-medium">
                Craft stunning, ATS-friendly resumes with AI intelligence. Get hired faster with professionally designed CVs.
            </p>

            {/* Primary Call-to-Action */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-6">
                <Link to='/app' className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full px-12 h-16 flex items-center justify-center transition-all duration-500 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    Create Your Free CV
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-3 size-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">
                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </svg>
                </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 md:mt-24 text-center">
                <p className="text-slate-500 font-medium text-lg mb-8 tracking-wide">
                    Trusted by innovative companies worldwide
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl w-full mx-auto py-8 px-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-teal-100/50 shadow-sm" id="logo-container">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="Partner logo" className="h-10 w-auto max-w-xs grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500" />
                    ))}
                </div>
            </div>
        </div>
    </div>
    <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

            * {
                font-family: 'Inter', 'Poppins', sans-serif;
            }
            
            h1, h2, h3, h4 {
                font-family: 'Poppins', sans-serif;
            }
        `}
    </style>
    </>
)
}

export default Hero
