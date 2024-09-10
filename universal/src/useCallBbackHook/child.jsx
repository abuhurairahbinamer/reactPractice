import React,{useState,useEffect,memo} from 'react'
let v=0;
const Child = ({sta}) => {
    const [time,setTime]=useState(10)
    const [ll,setll]=useState(0)
    v++;
    const fun=()=>{
        console.log("hellow child",v)
    }
  fun()
    useEffect(()=>{
    const check=setInterval(()=>{
        setTime((pre)=>{

            if(pre>0){
                return (pre-1)
            }
            else{
                clearInterval(check)
                return pre
            }
        })

     
      
    }
    ,1000)
    return () => {
        // console.log("clean up")
        clearInterval(check);
      };
    })

    
  
 
  return (
    <> 
       <h2 style={{backgroundColor:"red"}}>{time}</h2>
       <button onClick={()=>{setll(ll+1)}}>click</button>
       <h2>{ll}</h2>
       <h2>value of v is: {v}</h2>
</>

  )
}

export default  memo(Child)