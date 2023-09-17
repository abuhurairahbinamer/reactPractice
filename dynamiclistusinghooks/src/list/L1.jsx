import React from 'react'

const L1 = (props) => {
  const another = (war) =>{
    props.seeback(war)
  } 
//  const {lop}=this.props
console.log(props);
    return (
    <>
    <ul>
    <li onClick={()=>another(props.idd)}>
        {props.lop.name}
        {/* {lop.name} */}
    </li>
    </ul>
    </>
  )
}

export default L1