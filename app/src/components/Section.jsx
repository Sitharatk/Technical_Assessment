import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'

function Section() {
  return (
    <div className="h-screen bg-white shadow-md w-60 flex flex-col fixed top-0 left-0 ">
 
      <div className="flex items-center p-3 mt-7 ">
  <img src={Logo} alt="QuyL Logo" className="h-10" />
</div>


   
      <nav className="flex flex-col py-4 space-y-2">
    
        <Link to='/'
      
          className="flex items-center px-4 py-2 font-semibold text-gray-500 hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          <span>Dashboard</span>
        </Link>

      
        <Link to='/students'  className="flex items-center px-4 py-2 text-gray-500 font-semibold hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="fas fa-user-graduate mr-3"></i>
          <span>Students</span>
        </Link>

        <Link
          to="/chapter"
          className="flex items-center px-4 py-2 text-gray-500 font-semibold hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="fas fa-book mr-3"></i>
          <span>Chapter</span>
        </Link>

        <a
          href="#help"
          className="flex items-center px-4 py-2 text-gray-500 font-semibold hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="far fa-circle-question mr-3"></i>
          <span>Help</span>
        </a>

        <a
          href="#reports"
          className="flex items-center px-4 py-2 text-gray-500 font-semibold hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="fas fa-chart-line mr-3"></i>
          <span>Reports</span>
        </a>

        <a
          href="#settings"
          className="flex items-center px-4 py-2 text-gray-500 font-semibold hover:bg-gray-200 rounded-md hover:text-black"
        >
          <i className="fas fa-cog mr-3"></i>
          <span>Settings</span>
        </a>
      </nav>
    </div>
  )
}

export default Section
