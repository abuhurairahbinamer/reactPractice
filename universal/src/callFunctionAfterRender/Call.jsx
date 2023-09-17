import React,{useEffect,useState} from 'react'

const Call = () => {
    var [count,setcount]=useState(0);
    useEffect(() => {
        // This function will run after React updates the DOM
        console.log('DOM updated!');
      }, [count]);    // useEffect will be called when change in count occurs  

// we can have more than one useEffects
      useEffect(() => {   
        // This function will run after React updates the DOM
        console.log('hellow world!');
      }, []);    


      const Call = () => {
        setcount(count+1);      // if the value inside setcount is constant then useEffent will be called single time when button clicked,it will not run when button is clicked second time.
      }
      const Another=()=>{
        console.log("bogah");
      } 

      console.log("it will run")
  return (
    <>
    <div>Call</div>
    <button onClick={()=>Call()}>click</button>
    <button onClick={()=>Another()}>clickForAnother</button>
    </>
  )
}

export default Call