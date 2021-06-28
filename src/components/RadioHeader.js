import React, {useState} from "react";
import RadioMenu from "./RadioMenu";

export default function RadioHeader() {

  const [pauseStart, setPauseStart] = useState(true)

  return (
    <>
      <div>
        <button onClick={() => setPauseStart(true)}>S</button>
        <h1>Radio Stations</h1>
        <button onClick={() => setPauseStart(false)}>P</button>
      </div>
      {pauseStart ?
        <RadioMenu /> : <h1>Stop</h1>
      }
    </>
  )
}