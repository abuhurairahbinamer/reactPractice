import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import A1 from './A1';
import A2 from './A2';
import Admin from './Admin';
import User from './user';
import Nav from './Nav';
import Nothing from './nothing';
const auth=false;
const Index = () => {


  return (
    <>

      
<BrowserRouter>

      <Routes>
        
      <Route path="/" element={<Nav />}> </Route>
      {auth ?  <Route path="/admin" element={<Admin />}> </Route>: <Route path="/admin" element={<Nothing />}> </Route>}
       
        
      
        <Route path="/admin/A1" element={<A1 />}> </Route>
        <Route path="/admin/A2" element={<A2 />}> </Route>
      
      
        <Route path="/user" element={<User />}> </Route>
        <Route path="*" element={<Nothing />}> </Route>
       
      </Routes>
    </BrowserRouter>

    </>

  )
}

export default Index