import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const n=useNavigate();
    const Call = () =>{
  
    n('/about');
    // localStorage.clear();
    localStorage.setItem("Value",true);
    } 
  return (
 <>
    <div>home</div>
   <button onClick={()=>Call()}>go to about</button>
    </>
    )
}

export default Home