import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Quiz from './components/Quiz'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
    </BrowserRouter>
  )
}
