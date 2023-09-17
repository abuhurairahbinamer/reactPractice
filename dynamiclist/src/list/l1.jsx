import React from 'react'
var save="";
class L1 extends React.Component {
    constructor(props){
    super();
    // this.call=this.call.bind(this);
    }
    // super();
   
call(s){
    
    save=s;
    this.props.handlecallback(s);
}
render(){ 
      const {prol}=this.props;
      const {idd}=this.props;
    // console.log(idd);   
return (
    
    <div onClick={()=>this.call(idd)} value={idd} >{prol.name}</div>    // you can also use id={idd}
    
    )
}
}
export{save};
export default L1
