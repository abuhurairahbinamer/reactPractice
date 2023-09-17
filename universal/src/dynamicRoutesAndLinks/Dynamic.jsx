import React from 'react'
import Inside from './Inside'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
const Dynamic = () => {
const backendArray=[
    {_id: "1" , Name:"ahmed1" ,FatherName:"Nameem1", description:[
        {Q1:"qone", Q2:"qtwo", Q3:"qthree"},
        {Q1:"qone", Q2:"qtwo", Q3:"qthree"},
        {Q1:"qone", Q2:"qtwo", Q3:"qthree"}
    ]},
    {_id: "2" , Name:"ahmed2" ,FatherName:"Nameem2" , description:[
        {Q1:"q11", Q2:"q22", Q3:"q33"},
        {Q1:"q11", Q2:"q22", Q3:"q33"},
        {Q1:"q11", Q2:"q22", Q3:"q33"}
    ]},
    {_id: "3" , Name:"ahmed3" ,FatherName:"Nameem3" , description:[
        {Q1:"q111", Q2:"q222", Q3:"q333"},
        {Q1:"q111", Q2:"q222", Q3:"q333"},
        {Q1:"q111", Q2:"q222", Q3:"q333"}
    ]},
    {_id: "4" , Name:"ahmed4" ,FatherName:"Nameem4" , description:[
        {Q1:"q1111", Q2:"q2222", Q3:"q3333"},
        {Q1:"q1111", Q2:"q2222", Q3:"q3333"},
        {Q1:"q1111", Q2:"q2222", Q3:"q3333"}
    ]},
    {_id: "5" , Name:"ahmed5" ,FatherName:"Nameem5" , description:[
        {Q1:"q11111", Q2:"q25", Q3:"q35"},
        {Q1:"q11111", Q2:"q25", Q3:"q35"},
        {Q1:"q15", Q2:"q25", Q3:"q35"}
    ]}
]

    return (
        <>    <div>Dynamic</div>
   <BrowserRouter>

 {backendArray.map((currentValue,index,array)=>(
    <span key={index}>
        <span style={{margin:"0px 20px"}}><NavLink to={`/user/${currentValue._id}`}>{currentValue.FatherName}</NavLink></span>
    </span>
))} 


<br /><br /><br /><br /><br />


   


  
     <Routes>
 {
    backendArray.map((currentValue,index,array)=>(


<Route key={currentValue._id} path={"/user/"+currentValue._id+""} element={<Inside  com={currentValue}/>}/>


    ))
 }
 </Routes>
</BrowserRouter>
  
</>
    )
}

export default Dynamic