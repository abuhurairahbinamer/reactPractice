import React from 'react'
import P1 from './p1'
import P2 from './p2'
import P3 from './p3'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const Partent = () => {
  return (
    <div>
    
    <BrowserRouter>
    <Routes>

<Route path='/' element={<P1/>}/>
<Route path='/home' element={<P2/>} />
<Route path='/about' element={<P3/>} />
    </Routes>
    
    </BrowserRouter>


    </div>
  )
}

export default Partent