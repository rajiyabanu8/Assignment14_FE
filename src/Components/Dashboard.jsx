import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-400">
  
  <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
  
  <p className="text-gray-600 mb-6">
    Welcome to your CRM Dashboard.
  </p>

  <Link
    to="/userdetail"
    className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
  >
    Get Details
  </Link>

</div>
  )
}

export default Dashboard