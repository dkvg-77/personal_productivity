import React from "react";
import { Link } from "react-router-dom";

export const Bookmarkitems = ({ bookmark_array, onDelete }) => {
  let y = bookmark_array.b_url;
  let x = "//" + y;
  return (
    <div className="bookmark-item">
      <div className="bookmark-item-ele">
        <Link to={x} target="blank" className="bookmark-link">
          {bookmark_array.b_title.toUpperCase()}
        </Link>
        <button
          type="submit"
          className="btn btn-secondary delete-bookmark delete_bookmark_ele"
          onClick={() => onDelete(bookmark_array)}
        >
          D
        </button>
      </div>
      {/* Below we are inserting a function on the event 'onclick'. So, if this event occurs that function gets into action */}
    </div>
  );
};
