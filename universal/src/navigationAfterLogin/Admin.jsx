import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link ,Outlet} from 'react-router-dom'
// import A1 from './A1';
// import A2 from './A2';
const Admin = () => {
  return (
    <div>Admin


 {/* <BrowserRouter> */}

 <div>
        <li>
            <Link to="/admin/A1">A1</Link>
          </li>
          <li>
            <Link to="/admin/A2">A2</Link>
          </li>
    </div>


      
    {/* </BrowserRouter>  */}

   




    </div>
       
    
    

  )
}

export default Admin