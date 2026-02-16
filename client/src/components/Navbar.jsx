import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {

   const {user} = useSelector(state => state.auth)
   const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutUser = ()=>{
        navigate('/')
        dispatch(logout())
    }

  return (
    <div className='sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100/50 shadow-sm'>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-4 text-slate-800'>
        {/* Logo Section */}
        <Link to='/app' className='group'>
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <img src="/logo.svg" alt="CVBuilder Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className='absolute -inset-2 bg-gradient-to-r from-teal-400/10 to-teal-600/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            </div>
          </div>
        </Link>

        {/* User Section */}
        <div className='flex items-center gap-6'>
          {/* User Info */}
          <div className='hidden sm:flex items-center gap-3'>
            <div className='text-right'>
              <p className='text-sm font-medium text-slate-700'>Welcome back,</p>
              <p className='text-sm font-bold text-slate-900 truncate max-w-[180px]'>{user?.name || "Professional"}</p>
            </div>
            <div className='relative'>
              <div className='size-10 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 flex items-center justify-center group hover:scale-105 transition-transform duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className='absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-teal-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className='hidden md:flex items-center gap-6 border-l border-slate-200 pl-6'>
            <Link to='/app' className='group flex items-center gap-2'>
              <div className='size-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                </svg>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Your Resumes</p>
                <p className='text-sm font-semibold text-slate-900'>Dashboard</p>
              </div>
            </Link>

            <Link to='/' className='group flex items-center gap-2'>
              <div className='size-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors duration-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <p className='text-xs text-slate-500'>Back to</p>
                <p className='text-sm font-semibold text-slate-900'>Homepage</p>
              </div>
            </Link>
          </div>

          {/* Logout Button */}
          <div className='relative group'>
            <button 
              onClick={logoutUser} 
              className='flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-red-300 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 rounded-xl active:scale-95 transition-all duration-300 font-semibold'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-red-600">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" x2="9" y1="12" y2="12"/>
              </svg>
              <span className='max-sm:hidden'>Sign Out</span>
            </button>
            <div className='absolute -inset-1 bg-gradient-to-r from-red-400/10 to-red-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
          </div>
        </div>
      </nav>

      {/* Mobile User Info */}
      <div className='sm:hidden border-t border-slate-100 py-3 px-4 bg-gradient-to-r from-teal-50/50 to-white'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
          <div className='flex items-center gap-3'>
            <div className='size-9 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p className='text-xs text-slate-500'>Welcome back</p>
              <p className='text-sm font-semibold text-slate-900 truncate max-w-[150px]'>{user?.name || "Professional"}</p>
            </div>
          </div>
          <Link to='/' className='text-xs font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            </svg>
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
