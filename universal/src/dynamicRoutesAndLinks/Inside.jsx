import React from 'react'

const Inside = (props) => {
  return (
    <>
    <div style={{margin:"20px" ,backgroundColor:"blue"}}>{props.com.Name}</div>
     
       <div>

     {props.com.description.map((c,i,a)=>(
        <div key={i}>
       <span style={{margin:"20px 20px"}}>
        {c.Q1}
       </span>

       <span style={{margin:"20px 20px"}}>
        {c.Q2}
       </span>

<br />
<span style={{margin:"20px 20px"}}>
        {c.Q3}
       </span>

        </div>
     ))}


       </div>
          


    </>
  )
}

export default Inside