import React from "react";
import { useState, useEffect } from "react";

export default function Clock(props) {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div className="main-page">
        
        <div className="upper-page"></div>
        <div className="middle-page"> {date.toLocaleTimeString()}</div>
        <div className="lower-middle-page">GOOD EVENING DHANYA</div>
        <div className="bottom-page"></div>
        <div className="class_quote text-center"> {props.quote}</div>
      </div>
    </>
  );
}
