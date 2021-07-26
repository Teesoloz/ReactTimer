import "./styles.css";
import React, { useState } from "react";

const style = { fontSize: "70px", color: "green" };

export default function App() {
  setInterval(increase, 1000);
  var currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  function increase() {
    var newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="App">
      <h1 style={style}>{time}</h1>
      <button onClick={increase}>Get Time</button>
    </div>
  );
}
