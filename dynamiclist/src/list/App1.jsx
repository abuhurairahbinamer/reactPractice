import React from "react";
//1. if you don,t use this.setstate ,then render function will not be called again
//2.always write the member function first letter with capital letter other wise error will be thrown in 
//console.log 
//3.props method till now only works using classes
class App1 extends React.Component {
    constructor(){
        super();
        this.state = {
            isVisible: 0,
          };
        //   this.ShowProduct = this.ShowProduct.bind(this);
          this.Show = this.Show.bind(this);
        }
    
   
 Show(){

    this.setState({ isVisible: 1 });

 }

// callback(){
// alert("hellow");
// this.show();
// }

    
render(){
console.log("it will run");
    return(
<>
<div onClick={this.Show}>heloowndlsf</div>
{/* {this.state.isVisible && (
    <div>
        hellow
    </div>
)} */}
</>

)
}

}

export default App1;