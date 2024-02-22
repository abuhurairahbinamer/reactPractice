import React,{useContext} from 'react'
import { Globalvariable } from './parent';

const Superchild = () => {
  const {set}=useContext(Globalvariable)

// seperated portion

//   const l=[44,55,66];
//   let n=[44];
//   let c=0;
//   console.log(l.find((role)=>{
 
//  n.includes(role)

// }));


// let q=[88]
// let p=[44,77,88];
// console.log(p.find((role)=>{

//     if(role>55){
//         return true;
//     }
//     // q.includes(role)

// }))




// seperated portion




    return (
        <>
        
    <div>Superchild</div>
    <input type="text" onChange={(e)=>{set(e.target.value)}} />
    {/* {l? <div>yes</div> : <div>no</div>} */}
     

    </>
  )
}

export default Superchild;