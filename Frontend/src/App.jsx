import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/feed" replace />} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App