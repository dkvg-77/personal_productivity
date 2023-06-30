import React from "react";
import { Todoitems } from "./Todoitems";

export const Todos = (props) => {
  return (
    <div className="container todos-list-container">
      <h3 className="text-center todos-list-heading">TODOS LIST</h3>

      {props.todos_props.length === 0
        ? "No todos to display"
        : props.todos_props.map((todo_array_ele) => {
            // Below we are innserting 2 important things, one is todo_array and the other is onDelete.
            return (
              <Todoitems
                todo_array={todo_array_ele}
                key={todo_array_ele.s_no}
                onDelete={props.onDelete_props}
              />
            );
          })}
    </div>
  );
};
