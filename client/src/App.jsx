import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import CreateNote from './pages/CreateNote'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
     <Navbar />  
 <main>
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create-note" element={<CreateNote />} />
    </Routes>
</main> 
  </div>
  )
}

export default App