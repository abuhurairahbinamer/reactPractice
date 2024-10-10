import React from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
const [vv,setvv]=useState(false)

// the commented code is optional

// useEffect(() => {
//     // Function to handle resizing
//     const handleResize = () => {
//       if (window.innerWidth < 1023) {
//         setvv(false);  // Set vv to false when width is less than 1023px
//       }
//     };

//     // Attach the event listener
//     window.addEventListener('resize', handleResize);

//     // Call handleResize initially to check the current width
//     handleResize();

//     // Clean up the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);  // Empty dependency array to run only once on mount


  return (
    <>
    <div className={`${style.nav}`}>
<div className={`${style.ca1}`}>Navbar</div>

    <ul className={`${style.ul}`}>
    <li><NavLink className={({isActive})=>isActive?style.nl:style.nl1} to='/'> home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?style.nl:style.nl1} to='/about'> about</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?style.nl:style.nl1} to='/contact'> contact</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?style.nl:style.nl1} to='/view'> view</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?style.nl:style.nl1} to='/call'> call</NavLink></li>
    </ul>


<div className={style.last}>
    <button>register</button>
    <button>logout</button>
</div>

<div onClick={()=>setvv(!vv)} className={style.last1}>hellow</div>
    </div>
    
{vv && <div className={style.ll1}>
    <li><NavLink  className={({isActive})=>`${isActive?style.nl:style.nl1} ${style.pol}`} to='/'> home</NavLink></li>
    <li><NavLink className={({isActive})=>`${isActive?style.nl:style.nl1} ${style.pol}`} to='/about'> about</NavLink></li>
    <li><NavLink className={({isActive})=>`${isActive?style.nl:style.nl1} ${style.pol}`} to='/contact'> contact</NavLink></li>
    <li><NavLink className={({isActive})=>`${isActive?style.nl:style.nl1} ${style.pol}`} to='/view'> view</NavLink></li>
    <li><NavLink className={({isActive})=>`${isActive?style.nl:style.nl1} ${style.pol}`} to='/call'> call</NavLink></li>
</div>}
    
    </>
  )
}

export default Navbar