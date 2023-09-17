import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
const Pnav = () => {
  
  return (

 <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default Pnav