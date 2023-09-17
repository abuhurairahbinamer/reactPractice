import React from 'react'

const L2 = (props) => {
  console.log(props);
  if(props.poise!==undefined){
  return (
    <>
    <div>{props.poise.id}</div>
    <div>{props.poise.price}</div>
    </>
  )
}
}

export default L2