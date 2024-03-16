import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Ds2 from './Ds2';
import Dashboard from './Dashboard';
import { createContext } from 'react';
export var GV=createContext();
const UseLocation = () => {
   
    const [value1,setValue]=useState(false);
   
return (
<>
   <GV.Provider value={{ss:value1,ss2:setValue}}>
    <div>Parent1</div>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/police' element={<Ds2/>}/>
    </Routes>
    </BrowserRouter>
    </GV.Provider>
    </>


  )
}

export default UseLocation;