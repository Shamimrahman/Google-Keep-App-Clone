import React,{useState} from "react";
import "./index";
import Note from './Note'

function CreateNote(props) {

    let [present_state,update_state]=useState({

        title:"",
        content:""

    })

    let input_event=(event)=>{

        let{name,value}=event.target

        update_state((olditems)=>{

            return{

                ...olditems,[name]:value
            }

        })

    }

    let save_item=(event)=>{

        event.preventDefault()
          props.save_note(present_state)

          update_state({
              
        title:"",
        content:""

          })

    }

   
  return (
    <div className="container text-center main-div">
      <form>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          className="input-design mt-2"
          onChange={input_event}
          value={present_state.title}
        />
        <br></br>
        <textarea
          placeholder="Remember, be nice!"
          name="content"
          cols="30"
          rows="5"
          value={present_state.content}
          onChange={input_event}
          className="mt-3"
        ></textarea>
        <button variant="contained" className="mb-4 btn-style" onClick={save_item}>
        Save Now
      </button>

    
        
        
      </form>
    </div>
  );
}

export default CreateNote;
