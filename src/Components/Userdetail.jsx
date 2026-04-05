import axios from 'axios';
import React, { use } from 'react'
import { useState, useEffect } from 'react';

const Userdetail = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [editUser, setEditUser] = useState(null);


  useEffect(() => {
    fetchUserDetails();
  }, []);



  const fetchUserDetails = () => {
    // Example API call to fetch user details
    axios.get("http://localhost:3001/api/userdetails/getusers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log("User details fetched successfully:", response.data);
          setUserDetails(response.data); 
      })
      .catch((error) => {
        console.error("Failed to fetch user details:", error.response?.data || error.message);
      });
  };

  // update user details
  const handleUpdate = () => {
  axios.put(
    `http://localhost:3001/api/userdetails/updateuser/${editUser._id}`,
    editUser,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
  .then(() => {
    alert("User updated successfully");
    fetchUserDetails();   // refresh table
    setEditUser(null);    // close form
  })
  .catch((err) => {
    // console.error(err);
  });
};

// delete user
 const handleDelete = (userId) => {
    axios
      .delete(
        `http://localhost:3001/api/userdetails/deleteuser/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        alert("User deleted successfully");
        fetchUserDetails();
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    < div className=" flex flex-col items-center justify-center bg-gray-400">
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
      User Details
    </h1>
    <p className="text-center text-gray-600 mb-6">
      Here you can view and manage your user details.
    </p>
    <button onClick={fetchUserDetails} className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
      Fetch User Details
    </button>

    {editUser && (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="font-bold mb-2">Edit User</h2>

    <input
      type="text"
      value={editUser.name}
      onChange={(e) =>
        setEditUser({ ...editUser, name: e.target.value })
      }
      className="border p-2 mb-2 w-full"
    />

    <input
      type="email"
      value={editUser.email}
      onChange={(e) =>
        setEditUser({ ...editUser, email: e.target.value })
      }
      className="border p-2 mb-2 w-full"
    />

    <select
      value={editUser.role}
      onChange={(e) =>
        setEditUser({ ...editUser, role: e.target.value })
      }
      className="border p-2 mb-2 w-full"
    >
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>

    <button
      onClick={handleUpdate}
      className="bg-blue-500 text-white px-4 py-2 mr-2"
    >
      Update
    </button>

    <button
      onClick={() => setEditUser(null)}
      className="bg-gray-500 text-white px-4 py-2"
    >
      Cancel
    </button>
  </div>
)}

     <div className="mt-6 w-full max-w-2xl">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.role}</td>
              <td className="py-2 px-4 border-b">
                
                <button onClick={()=> setEditUser(user)} className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition duration-300 mr-2"> Edit</button>
                <button 
                onClick={() => handleDelete(user._id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  )
}

export default Userdetail