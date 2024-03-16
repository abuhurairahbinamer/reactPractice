import React from 'react'
import { useLocation } from 'react-router-dom'
const P3 = () => {
  const l=useLocation();
  console.log(l);
    return (
    <>
    <div>P3</div>
    <div>{l.state.name}</div>
    </>
  )
}

export default P3