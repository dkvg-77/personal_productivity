import React from "react";
import { Bookmarkitems } from "./Bookmarkitems";

export const Bookmark = (props) => {
  return (
    <div className="container bookmark-list-container">
      <h3 className="text-center bookmark-list-heading">Bookmarks LIST</h3>
      <div className="bookmark-items-container">
      {( props.bookmark_props.length === 0 )
        ? "No bookmarks to display"
        : props.bookmark_props.map((bookmark_array_ele) => {
            // Below we are innserting 2 important things, one is todo_array and the other is onDelete.
            return (
              <Bookmarkitems
                bookmark_array={bookmark_array_ele}
                key={bookmark_array_ele.s_no}
                onDelete={props.onDelete_bookmark_props}
              />
            );
          })}
      </div>
     
    </div>
  );
};
