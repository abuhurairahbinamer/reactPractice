import React from 'react'
import { useNavigate } from 'react-router-dom'
const P2 = () => {
const nn=useNavigate()

// const call=()=>{
// nn('/about',{state:{id:1,name:'abu'}})

// }

  return (
    <div>

<button onClick={()=>{nn('/about',{state:{id:1,name:'abu'}})}}>go to about</button>

    </div>
  )
}

export default P2