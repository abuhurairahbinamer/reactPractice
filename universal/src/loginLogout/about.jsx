import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
// localStorage.setItem("Value","");
const About = () => {
  var nav=useNavigate();
  // console.log(localStorage.getItem("Value"));
console.log("look")
  // console.log(props);
  const fun=()=>{
    
    localStorage.setItem("Value",false);
    nav('/');
    
   

    // window.history.back();
  

    // localStorage.clear();
    // window.location.href='/'
    
}

if(localStorage.getItem("Value")!=="false"){

    return (

    <>
    
    <div>about</div>
    <button onClick={()=>fun()}>logout</button>
    </>
  )
}
else if(localStorage.getItem("Value")==="false"){
  return(
    <>
    <div>sorry you have logged out</div>
    </>
  )
}
}

export default About