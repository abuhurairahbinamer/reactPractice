import React, { useCallback, useState } from 'react'
import Child from './child'
const Parent = () => {
    const demo=[1]
    const arr=new Array(5)
    for(let i=0; i<5; i++){
        arr[i]=i
    }
    const [count,setcount]=useState(0)
    // console.log(arr[3])
    const callbackfunc=useCallback(()=>{
// some operation
    },[])
  return (
    <>
        {/* {console.log("hellow")} */}
    <div>parent</div>
    <div><button onClick={()=>setcount(count+1)}>increase</button></div>
    <div>the count is: {count}</div>
    {/* {arr.map((n,i)=>(
        <div key={i}>
        <Child/>
        </div>
        ))} */}
    
    <Child sta={callbackfunc}/>

{demo.map((n,i)=>{

    if(5=='5'){
        return(<div key={i}>footer</div>)
    }
})}

    </>
  )
}

export default Parent