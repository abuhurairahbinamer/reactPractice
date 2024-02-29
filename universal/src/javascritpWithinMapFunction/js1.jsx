import React, { useState } from 'react'

const Js1 = () => {
    const [arr,setarr]=useState([11,22,33,44,55])
  return (
    <>
hellow
<div>
{arr.map((ele,i)=>{
i++;
console.log(i);
return(
<div key={i}>
<div>{ele}</div>
</div>
)
})}
</div>

    </>
  )
}

export default Js1