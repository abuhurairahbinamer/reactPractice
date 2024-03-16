import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { GV } from './parent1'
import { useContext } from 'react'
import { GV } from './parent1'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Dashboard = () => {
    const [tr,setTr]=useState(true);
    const {ss,ss2}=useContext(GV);
    const fun1=()=>{
     localStorage.removeItem("login");
     ss2(false);
     const t=localStorage.getItem('login');
     console.log(t);
     setTr(!tr);
    }
    const ul=useLocation();
    console.log(ul);
    const nn=useNavigate();
    // const {ss}=useContext(GV);
    const ss1=localStorage.getItem('login');
useEffect(()=>{
if(!ss1){
nn('/login ');
}

},[ss1,nn])
    return (
    <>
    <div>Dashboard</div>
    <Link to='/police'>police</Link>
    <button onClick={fun1}>logout</button>
    </>
  )
}

export default Dashboard