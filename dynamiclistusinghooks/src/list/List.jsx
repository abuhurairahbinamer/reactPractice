import React from 'react'
import L1 from './L1';
import L2 from './L2';
import {useState,useEffect} from 'react'
var flip=0;
const List = () => {
    const [num,setnum]=useState(-1);
   
// const call=()=>{
//     flip=flip+1;
//     setnum(flip);
  
// }
// console.log("hellow");



const [products, setProducts] = useState([]);

const callback = (s) =>{
setnum(s);
}

  useEffect(() => {
    console.log('component did mount & update');
    setProducts([
      {
        id: 1,
        name: 'Egg',
        price: 15,
      },
      {
        id: 2,
        name: 'Milk',
        price: 150,
      },
      {
        id: 3,
        name: 'Honey',
        price: 1200,
      },
    ]);
  }, []);
  return (
    <>
    
    {/* <div>
        {num}
        <br />
        <button onClick={()=>call()}>
         click
        </button>
    </div> */}
    
   {products.map((p,i)=>(
    <L1 key={i} lop={p} idd={i} seeback={callback}/>
   ))} 
     

<L2 poise={products[num]}/>
     
     
    </>
  )
}

export default List
