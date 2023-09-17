import React from 'react'
class L2 extends React.Component{
    constructor(props){;
    super();
    
}
render(){
    // console.log(this.props)
    const {takeA}=this.props;
    console.log(takeA)
    if(takeA!==undefined){
    return(


        <>
        <div>{takeA.price}</div>
        <div>{takeA.id}</div>
        </>
    )
}
}
}
// const L2 = (props) => {
//     console.log(this.props)
//   return (
  
//   )
// }

export default L2