import React from 'react'
import L1 from './l1';
import L2 from './l2';
// import { save } from './l1';
var flip=-1;

class List extends React.Component {
    constructor(){
        super();
        this.state={
            liArr:[
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
            ]
            ,
            Permit:false,

        };

this.callback=this.callback.bind(this);
this.Another=this.Another.bind(this);
    }
   

callback(take){
flip=take;
// alert(flip);
}

Another(){     // but this is awkward method ,intead use hooks
    
this.setState({ Permit:true }); // you wrote '=' sign therfore it was not working 
// this.setState({ permit: true });
console.log(this.state.Permit) //always write state you forgot to write it
}
    
render(){
console.log("it will run");
    return(
    <div className="container"  >
<div className="row">
<div className="col-md-3" >
    <div onClick={this.Another} className="inl">
{this.state.liArr.map((p,i)=>(
 <L1 key={i} idd={i} handlecallback={this.callback}  prol={p}/>   
))}
</div>
</div>
<div className="col-md-9">
<L2 key={flip} takeA={this.state.liArr[flip]} />
</div>
</div>


{this.state.Permit && (
    <div>
        hellow World
    </div>
)}


    </div>
)

}

}

export default List