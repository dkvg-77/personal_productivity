import React from "react";

export const Todoitems = ({ todo_array, onDelete }) => {
  return (
    <div>
      <hr />
      <h5>{todo_array.todo_title} </h5>
      <p>{todo_array.descr} </p>
      {/* Below we are inserting a function on the event 'onclick'. So, if this event occurs that function gets into action */}
      <button
        type="submit"
        className="btn btn-sm btn-secondary"
        onClick={() => onDelete(todo_array)}
      >
        Delete
      </button>
      
    </div>
  );
};
