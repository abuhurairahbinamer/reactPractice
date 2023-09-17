import React from 'react'

const Main = () => {
  // let user={     // for single
  //   fname:"",
  //   police:"" 
  // }
  
  
  
  let user=[{
    fname:"",
    police:""
  },
  {
    fname:"",
    police:""
  }

]
  const myfunc=(e)=>{
    // user[e.target.name]=e.target.value  // for single

user[0][e.target.name]=e.target.value
console.log(user)
  }
  return (
    <div>

      <input type="text" name='fname' onChange={(e)=>myfunc(e)} />
      <input type="text" name='police' onChange={(e)=>myfunc(e)} />
    </div>
  )
}

export default Main