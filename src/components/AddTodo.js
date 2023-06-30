
import React, {useState} from 'react';

export const AddTodo = ({add_todo_props}) => {
  const [title,setTitle] = useState("");
  const [descr, setDescr] = useState("");

  // below is the function of the event that happens when we submit the form
  const sumbit_todo = (e)=>{
    e.preventDefault();
    if(!title || !descr){
      alert("The title or description can't be empty");
    }
    else{
      add_todo_props(title, descr);

    }
  }

  return (
    <div className="container my-4 add-todo-container">
        <h3>Add a Todo</h3>
        {/* we are adding an event in here. We are saying, that if the form is submitted run that function.  */}
      <form onSubmit={sumbit_todo}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
        
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
              // {/* Here, below we are adding the value as title  */}
            value={title}
            // We are inserting another event in here. 
            // Because when we added the value, we were not able to change the input. 
            // SO, by inserting the below event, we are able to change the input without any problem.
            
            onChange = {((e)=>setTitle(e.target.value))}
            placeholder="Enter Todo Title"
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="descr">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="descr"
             // {/* Here, below we are adding the value as descr  */}
             value={descr}
             onChange = {((e)=>setDescr(e.target.value))}
            placeholder="Todo description"
          />
        </div>
        
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
