import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
   <Navbar/>
   </Router>
    </>
  )
}

export default App
