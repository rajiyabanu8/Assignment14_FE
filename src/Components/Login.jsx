import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    axios.post("http://localhost:3001/api/users/login",
      {
        email,
        password,
      }
    ).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
    ).catch((error) => {
      console.error("Login failed:", error.response?.data || error.message);
    });


    localStorage.setItem("token", response.data.token);

    navigate("/dashboard");
  } catch (error) {
    // console.log("Login failed:");
    // console.error("Login failed:", error.response?.data || error.message);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  
  <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
    
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Login
    </h1>

    <form onSubmit={handleSubmit} method='post' className="space-y-4">
      
      {/* Email */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>

    </form>

  </div>
</div>
  )
}

export default Login