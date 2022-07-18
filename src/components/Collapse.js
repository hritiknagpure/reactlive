import React from "react";
import { useState, useRef} from "react";
import "../Collapse.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"



function Collapse(props){

const [isOpen, setIsOpen]= useState(false);
const parentRef = useRef();

    return <div className="Collapse">
<button type="button" class="btn btn-lg btn-block btnprimary" onClick={()=>setIsOpen(!isOpen)}>{props.label}</button>
<div 
className="content-parent"
ref={parentRef}
style={isOpen ? {
    height: parentRef.current.scrollHeight + "px"
}:{
    height:"0px"
}
}
>
<div className="content">{props.children}</div>

</div>
    </div> 

}export default Collapse