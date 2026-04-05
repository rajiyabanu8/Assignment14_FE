import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-400">
        
    <div>
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Welcome to the CRM
    </h1>
    <p className="text-center text-gray-600 mb-6">
      Manage your customers, sales, and more with ease.
    </p>
    <div className="flex justify-center space-x-4">
    <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
      Register
    </Link>
    <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ml-4">
      Login
    </Link>
    </div>
    
    

    </div>
        
    </div>
  )
}

export default Home