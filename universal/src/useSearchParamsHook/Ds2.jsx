import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const Ds2 = () => {
  let nn=useNavigate();
   let auth=localStorage.getItem('login');
  useEffect(()=>{
   if(!auth){
nn('/login?redirect=/police');
   }

  },[auth,nn])
  return (
    <>
police sation
    </>
  )
}

export default Ds2