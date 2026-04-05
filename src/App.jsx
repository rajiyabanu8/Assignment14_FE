import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Userdeatail from './Components/Userdetail';
import Protect from './Components/Protect';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={
            <Protect>
              <Dashboard />
            </Protect>
          } />

          <Route path='/userdetail' element={<Userdeatail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
