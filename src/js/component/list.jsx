
import React, { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai";

const List = ( ) => {
    const [elementlist, setElementList]=useState([]);
    const [change, setChange]= useState("");
    const [invisible, setinVisible]= useState(0)

function  handleOnChange (e) {
    setChange(e.target.value);
}   
function handleKeyDown (event) {
        if(event.key =='Enter')
        { 
            setElementList(current => [...current, change]);
            setChange("");
    }
      }

function eliminartarea(param){
    const eliminar=elementlist[param.index]
    setElementList(elementlist.filter(element=>element != eliminar))
    
}
function activedelete(){
    console.log("invisible")
    setinVisible(1)
}
function offdelete(){
    console.log("fuera")
    setinVisible(0)
}
	return (
            
                <div className="tasklist pb-2">
                    <div className="uptask">
                        <input type="text" className="formtask mt-1 p-1" id="text" placeholder="What needs to be done?"  value={change} onKeyDown={handleKeyDown} onChange={handleOnChange}/>
                    </div>
                    <div className="tasktext">
                        <ul>{elementlist.map((thingdo, index)=>
                             <div className="element  p-2"key={index} onMouseMove={activedelete} onMouseOut={offdelete} >
                                <li >{thingdo}</li>
                                <div className="delete mx-1" style={{opacity:invisible,}}  onClick={()=>eliminartarea({index})} ><AiFillCloseCircle/></div>
                            </div>)}
                        </ul>
                    </div>
                    <div className="numbertasks p-1">
                        <p>{elementlist.length} item left</p>
                    </div>
                    <div className="draw1"></div>
                    <div className="draw2"></div>
                   
                </div>     
        
	);
};

export default List;
