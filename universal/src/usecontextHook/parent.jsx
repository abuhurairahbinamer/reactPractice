import React,{createContext,useState} from 'react'
import Child from './child'
export const Globalvariable=createContext();
const Parent = () => {
    const [varr,setvar]=useState("hellow");
    const setvarValue=(item)=>{
      setvar(item);

    }
  return (
    <>
    <Globalvariable.Provider value={{myMessage:varr,set:setvarValue}}>
    <div>parent</div>
    <Child/>

    </Globalvariable.Provider>
    </>

  )
}

export default Parent