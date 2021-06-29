import React, { useEffect, useState } from "react";
import RadioInfo from "./RadioInfo";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

export default function RadioMenu() {

    const [radioData, setRadioData] = useState([]);
    const [radioClicked, setRadioClicked] = useState();
    const [radioName, setRadioName] = useState("");
        
    useEffect(() => {
        getRadioData();
    }, []);

    const getRadioData = () => { 
        axios
        .get("https://teclead.de/recruiting/radios")
        .then((response) => {
            setRadioData(response.data.radios);
        })
        .catch((err) => err);
    };

    const handlePlusClick = (e) => {
        let counter = radioClicked;
        e.preventDefault();
        if (counter < radioData.length-1){
            setRadioClicked(counter +=1);
            setRadioName(radioData[counter].name);
        };
    };

    const handleMinusClick = (e) => {
        let counter = radioClicked;
        e.preventDefault();
        if (counter > 0){
            setRadioClicked(counter -=1);
            setRadioName(radioData[counter].name);
        };
    };

    return (

        <>
            <div className="stations-section" >
            
            {radioData.map((el, index) => 
                
                <div key={index} className="stations-container">

                {radioClicked === index ? (
                    <div className="picture-section">
                        <FontAwesomeIcon className="controls fa-2x" onClick={e => handleMinusClick(e)} icon={faMinusSquare}/>
                        <img className="radio-img" src={el.image} alt="a"></img>
                        <FontAwesomeIcon className="controls fa-2x" onClick={e => handlePlusClick(e)} icon={faPlusSquare}/>
                    </div>) : null}

                    <div onClick={() => setRadioName(el.name)}>
                        <button className="station-btn" onClick={() => setRadioClicked(index)}>
                            <p className="p1">{el.name}</p> 
                            <p className="p2">{el.frequency} FM</p>
                        </button>
                    </div>

                </div>
                
                )}
            </div>
            
            {radioClicked >= 0 ? 
                <RadioInfo radioName={radioName}/> 
                : <div className="radio-info">
                    <h3>MyRADIO</h3>
                  </div>
            }
        </>
    );
};