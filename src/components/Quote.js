import React from "react";

export default function Quote(quote_props) {
  return (
    <div className="text-center">
      <div>Quote</div>
      <div>{quote_props.random_quote}</div>
    </div>
  );
}
