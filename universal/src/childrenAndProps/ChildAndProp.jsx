import React from 'react'
import Prot from './protected';
const auth=true;
const ChildAndProp = () => {
  return (
    <div>
        <Prot aut={auth}>

<h1>hellow world</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, ducimus.</p>
        </Prot>

    </div>
  )
}

export default ChildAndProp