import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-teal-50/20 to-teal-100/10 p-4'>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-teal-500/5 via-transparent to-teal-300/5 -z-10"></div>
            <div className="absolute bottom-0 right-0 size-80 bg-teal-200/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-full max-w-md">
                {/* Form Container */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl border border-teal-100/50 shadow-2xl overflow-hidden">
                    {/* Decorative Header */}
                    <div className="relative bg-gradient-to-r from-teal-500 to-teal-600 h-2"></div>
                    
                    <div className="px-8 py-10">
                        {/* Header Section */}
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center size-14 bg-gradient-to-br from-teal-100 to-white rounded-2xl border border-teal-200 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            
                            <h1 className="text-3xl font-bold text-slate-900 mb-2">
                                {state === "login" ? "Welcome Back" : "Start Your Journey"}
                            </h1>
                            <p className="text-slate-600">
                                {state === "login" 
                                    ? "Sign in to continue building your dream career" 
                                    : "Create your account and unlock professional tools"}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {state !== "login" && (
                                <div className="group">
                                    <div className="flex items-center bg-white border border-slate-200 hover:border-teal-300 rounded-xl h-14 px-5 transition-all duration-300 group-hover:shadow-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-teal-500 mr-3 transition-colors">
                                            <circle cx="12" cy="8" r="5"/>
                                            <path d="M20 21a8 8 0 1 0-16 0"/>
                                        </svg>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Full Name" 
                                            className="w-full border-none outline-none ring-0 bg-transparent text-slate-700 placeholder-slate-400"
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </div>
                                </div>
                            )}
                            
                            <div className="group">
                                <div className="flex items-center bg-white border border-slate-200 hover:border-teal-300 rounded-xl h-14 px-5 transition-all duration-300 group-hover:shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-teal-500 mr-3 transition-colors">
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email Address" 
                                        className="w-full border-none outline-none ring-0 bg-transparent text-slate-700 placeholder-slate-400"
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            
                            <div className="group">
                                <div className="flex items-center bg-white border border-slate-200 hover:border-teal-300 rounded-xl h-14 px-5 transition-all duration-300 group-hover:shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-teal-500 mr-3 transition-colors">
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        className="w-full border-none outline-none ring-0 bg-transparent text-slate-700 placeholder-slate-400"
                                        value={formData.password} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                            </div>
                            
                            {state === "login" && (
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="remember" className="size-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
                                        <label htmlFor="remember" className="ml-2 text-sm text-slate-600">Remember me</label>
                                    </div>
                                    <button type="button" className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                                        Forgot password?
                                    </button>
                                </div>
                            )}
                            
                            <button 
                                type="submit" 
                                className="w-full h-14 rounded-xl text-white font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
                            >
                                {state === "login" ? "Sign In to Dashboard" : "Create Free Account"}
                            </button>
                        </form>

                        {/* Toggle Section */}
                        <div className="mt-10 pt-8 border-t border-slate-100 text-center">
                            <p className="text-slate-600">
                                {state === "login" ? "New to CVBuilder?" : "Already have an account?"}
                                <button 
                                    onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                                    className="ml-2 font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                                >
                                    {state === "login" ? "Create an account" : "Sign in here"}
                                </button>
                            </p>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                            <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                                </svg>
                                <span>Secure & encrypted</span>
                                <span className="text-slate-300">•</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500">
                                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                    <line x1="12" x2="12" y1="19" y2="22"/>
                                </svg>
                                <span>10,000+ professionals</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer Note */}
                <p className="text-center text-sm text-slate-500 mt-8">
                    By continuing, you agree to our 
                    <a href="/terms" className="text-teal-600 hover:text-teal-700 font-medium mx-1">Terms</a> 
                    and 
                    <a href="/privacy" className="text-teal-600 hover:text-teal-700 font-medium mx-1">Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default Login
