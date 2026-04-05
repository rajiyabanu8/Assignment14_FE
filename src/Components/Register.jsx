import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

   const handlesubmit = (e) => {
        e.preventDefault();
        // console.log("Form submitted");

       
          axios.post("http://localhost:3001/api/users/register", userData)
            .then((response) => {
              console.log("Registration successful:", response.data);
              // clearFormData(); // Clear form data on successful registration
              setUserData({
      name: "",
      email: "",
      password: "",
      role: "user"
    });
            })
            
            .catch((error) => {
              console.error("Registration failed:", error.response?.data || error.message);
            });

            console.log(userData);
            navigate("/login");

    }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Register
    </h1>
    <p className="text-center text-gray-600 mb-6">
      Create an account to access the CRM Dashboard.
    </p>  
    <form onSubmit={handlesubmit} method='post' className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          value={userData.name}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setUserData({...userData,name:e.target.value})}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          value={userData.email}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setUserData({...userData,email:e.target.value})}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          value={userData.password}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setUserData({...userData,password:e.target.value})}
        />
      </div>
        <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Role
        </label>
        <select 
        value={userData.role}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setUserData({...userData,role:e.target.value})}
        >
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        Register
      </button>
    </form>

    </div>
  )
}

export default Register