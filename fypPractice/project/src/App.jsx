import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { addform } from './redux/slice'
function App() {
  const dispatch=useDispatch();
const [obj,setobj]=useState({name:'',password:''})
  const call=(e)=>{
setobj((pre)=>{
return{
  ...pre,
[e.target.name]:e.target.value
}
})

 }


const call1=()=>{
  if(obj.name==="abu" && obj.password==="12345"){
    alert("good")
    dispatch(addform(obj))
  }
}

  return (
    <>
<div className='div1'>
 <div> 
<input type="text" name='name' onChange={call}/>
<br />
<input type="password"  name='password' onChange={call}/>
<br />
<button onClick={call1}>submit</button>
</div>
</div>

    </>
  )
}

export default App
