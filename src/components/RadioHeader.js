import React, {useState} from "react";
import RadioMenu from "./RadioMenu";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioHeader() {

  const [pauseStart, setPauseStart] = useState(true);

  return (
    <>
      <div className="title-section">
        <FontAwesomeIcon className="fa-stop fa-3x" onClick={() => setPauseStart(false)} icon={faStop}/>
        <h1>STATIONS</h1>
        <FontAwesomeIcon className="fa-play fa-3x" onClick={() => setPauseStart(true)} icon={faPlay}/>
      </div>
        
      {pauseStart ?
        <RadioMenu /> : 
        <div className="radio-info paused">
        <h3>MyRADIO</h3>
        </div>
      }
    </>
  );
};