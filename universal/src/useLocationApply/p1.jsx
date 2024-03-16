import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const P1 = () => {
    const nn=useNavigate()
  return (
    <>
    <div>p1</div>
    <Link to='/home'>go to home</Link>
    <button onClick={()=>{nn('/about',{state:{id:2,name:'hurairah'}})}}>go to about</button>
    </>
  )
}

export default P1