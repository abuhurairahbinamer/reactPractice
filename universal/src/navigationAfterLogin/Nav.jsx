import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const Nav = () => {
  useEffect(()=>{
    console.log("first")
    return ()=>{console.log("hellow clean up")}
    // console.log("last")
  })
  console.log("precious")
  return (
    <div>
        <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
    </div>
  )
}

export default Nav