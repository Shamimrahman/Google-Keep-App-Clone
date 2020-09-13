import React from 'react'
import './index.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
    return (
       
        <div className='note-style ml-5 mt-5'>
        <div>
        <h3 className="m-2 text-center mt-2">{props.title}</h3>
        <p className="ml-3"> {props.content}</p>
        <span className='ml-5'>
        
        
        <DeleteForeverIcon className="ml-5 icon-style" onClick={()=>{

            props.onSelect(props.id)



        }} /></span>
            
        
        </div>
       
        </div>
        
        
        
     
        
       
    )
}

export default Note
