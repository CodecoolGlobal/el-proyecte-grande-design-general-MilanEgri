import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate(); 

    function handleClick(path){
        navigate(path)
    }
  return (
    

  <header>
    <nav className="bg-gray-700">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <h1 onClick={e => handleClick('/')} className="text-2xl font-bold text-gray-50 cursor-pointer">OnlineMarket</h1>
        <div className="flex space-x-10">
          <div onClick={e => handleClick('/login')} className="flex items-center space-x-2 cursor-pointer">
            <span>
              <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <span className="text-gray-50">Login</span>
          </div>
          <div onClick={e => handleClick('/register')} className="flex items-center space-x-2 cursor-pointer">
            <span>
              <svg  className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </span>
            <span className="text-gray-50">Register</span>
          </div>
          
        </div>
        <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
          <span>
            <svg  className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input className="outline-none" type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
