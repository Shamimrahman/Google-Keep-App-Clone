import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CreateNote from './CreateNote'
import Navbar from './Navbar'
import Note from './Note'
import './index.css'
function App() {

    let[nitem,uitem]=useState([])


    let savenote=(present_state)=>{



        uitem((olditem)=>{

            return[...olditem,present_state]


        })


    }

    let delete_item=(id)=>{

        uitem((olditem)=>{

            return olditem.filter((array,index)=>{
                return index!=id
            })


        })

    }
    return (
       <>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <CreateNote save_note={savenote}></CreateNote>
    
        
           {nitem.map((value,index)=>{

            return(
                <Note

                title={value.title}
                content={value.content}
                key={index}
                id={index}
                onSelect={delete_item}
                />

            )



        })}

        <br></br>

    


        
        
        
        </>
    )
}

export default App
