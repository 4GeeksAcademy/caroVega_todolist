
import React, { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai";


const List = ( ) => {
    const [elementlist, setElementList]=useState(["1","2","3"]);
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
            
                <div className="tasklist" >
                    <div className="uptask">
                        <input type="text" className="formtask" id="text" placeholder="What needs to be done?"  value={change} onKeyDown={handleKeyDown} onChange={handleOnChange}/>
                    </div>
                    <div className="tasktext">
                        <ul>{elementlist.map((thingdo, index)=>
                             <div className="element py-2"  key={index} onMouseOver={activedelete} onMouseOut={offdelete} >
                                <li className="list pl-1">{thingdo}</li>
                                <div className="delete" id={index} style={{opacity:invisible,}}  onClick={()=>eliminartarea({index})} ><AiFillCloseCircle/></div>
                            </div>)}
                        </ul>
                    </div>
                    <div className="numbertasks p-1">
                        <p>{elementlist.length} item left</p>
                    </div>
                    
                </div>  
                  
        
	);
};

export default List;
