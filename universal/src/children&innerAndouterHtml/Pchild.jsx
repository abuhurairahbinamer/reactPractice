import React,{useRef} from 'react'
import './p.css';
const Pchild = () => {
const dd=useRef(null);  
const call=()=>{
    if(dd.current){
        // var t= dd.current.children[0].id;
        // console.log(t);

        dd.current.children[0].innerHTML="<p>changed</p>\
<span>this is span</span>";
    }
}    

const call1=()=>{
    if(dd.current){
    //  var y=dd.current.children.length;
//   console.log(y);


// dd.current.outerHTML="";


 dd.current.children[1].outerHTML="";

    }
}


const call2 =()=>{
    if(dd.current){
    var ty= dd.current.children[1].children[0];  
    console.log(ty);

}
}
return (
    <>
    <div ref={dd}>

     <div id='hellow'>this is child 1</div>
     <div>this is child 2
     <div>
        this is subchild
     </div>
     
     </div>

    </div>
<button onClick={()=>call()}>chnageInnerHtml</button>
<button onClick={()=>call1()}>chnageOuterHtml</button>
<button onClick={()=> call2()}>checkFurtherChildren</button>
    </>
  )
}

export default Pchild