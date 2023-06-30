
import React, {useState} from 'react';

export const AddBookmark = ({add_bookmark_props}) => {
  const [b_title,setbtitle] = useState("");
  const [b_url, setburl] = useState("");

  // below is the function of the event that happens when we submit the form
  const sumbit_bookmark = (e)=>{
    e.preventDefault();
    if(!b_title || !b_url){
      alert("The title or description can't be empty");
    }
    else{
      add_bookmark_props(b_title, b_url);

    }
  }

  return (
    <div className="container my-4 add-todo-container">
        <h3>Add a Bookmark</h3>
        {/* we are adding an event in here. We are saying, that if the form is submitted run that function.  */}
      <form onSubmit={sumbit_bookmark}>
        <div className="form-group">
          <label htmlFor="title">Bookmark Title</label>
        
          <input
            type="text"
            className="form-control"
            id="b_title"
            aria-describedby="emailHelp"
              // {/* Here, below we are adding the value as title  */}
            value={b_title}
            // We are inserting another event in here. 
            // Because when we added the value, we were not able to change the input. 
            // SO, by inserting the below event, we are able to change the input without any problem.
            
            onChange = {((e)=>setbtitle(e.target.value))}
            placeholder="Enter Bookmark Title"
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="b_url">bookmark Description</label>
          <input
            type="text"
            className="form-control"
            id="b_url"
             // {/* Here, below we are adding the value as descr  */}
             value={b_url}
             onChange = {((e)=>setburl(e.target.value))}
            placeholder="Bookmark description"
          />
        </div>
        
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
