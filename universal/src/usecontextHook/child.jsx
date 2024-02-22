import React,{useContext} from 'react'
import { Globalvariable } from './parent'
import Superchild from './Superchild';
const Child = () => {
    const {myMessage}=useContext(Globalvariable);

  return (
    <>
    <div>Child {myMessage}</div>
    <Superchild/>
    </>
  )
}

export default Child