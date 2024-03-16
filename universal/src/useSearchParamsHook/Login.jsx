import React from 'react'
// import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useContext } from 'react'
import { GV } from './parent1'
const Login = () => {
  const nn=useNavigate();
  const pp=useSearchParams();
//   console.log(pp[0].get('redirect'));
const rd=pp[0].get('redirect')===null? '/dashboard' : pp[0].get('redirect');
const {ss,ss2}=useContext(GV);
// console.log(ss);
  const log=()=>{
    ss2(!ss);
    localStorage.setItem("login",!ss);
    // console.log(ss);
    console.log(rd);
    nn(rd)

  }
    return (
    <>
    
    <div>Login page</div>
    <button onClick={()=>{log()}}> login</button>
    </>
  )
}

export default Login