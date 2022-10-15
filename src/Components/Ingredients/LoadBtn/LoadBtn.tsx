import React from "react"
import { usePizza } from "../../Context/provider";
import './loadbtn.css'

export default function LoadBtn(){
    const [modal,setModal]=React.useState(false);
    const [value,setValue]=React.useState('');
    const {load}=usePizza()
    const styleModal={
        display:modal?'flex':'none'
    }
    const checkLoad=()=>{
        if(value.length>0){
            load(value);
            setModal(false);
        }
    }
    return(
        <>
        <div className="load">
            <button className="load-btn" onClick={()=>setModal(true)}>Load Pizza</button>
        </div>
        <div className="modal-load" style={styleModal}>
            <div className="modal-load__info">
                <input type="text" onChange={(e)=>setValue(e.target.value)} className="modal-load__text"/>
                <div className="modal-load__btns">
                    <button className="cancel" onClick={()=>setModal(false)}>Cancel</button>
                    <button className="submit" onClick={()=>checkLoad()} disabled={value.length>0?false:true}>Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}