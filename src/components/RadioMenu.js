import React, { useEffect, useState } from "react";
import RadioInfo from "./RadioInfo";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RadioMenu() {

    const [radioData, setRadioData] = useState([]);
    const [radioClicked, setRadioClicked] = useState();
    const [radioName, setRadioName] = useState("");
        
    useEffect(() => {
        getRadioData();
    }, []);

    const getRadioData = () => { 
        fetch("https://teclead.de/recruiting/radios")
        .then(res => res.json(200))
        .then((response) => {
            setRadioData(response.radios);
        })
        .catch((err) => err);
    };

    const handlePlusClick = () => {
        let counter = radioClicked;
        if (counter < radioData.length - 1){
            setRadioClicked(counter += 1);
            setRadioName(radioData[counter].name);
        };
    };

    const handleMinusClick = () => {
        let counter = radioClicked;
        if (counter > 0){
            setRadioClicked(counter -= 1);
            setRadioName(radioData[counter].name);
        };
    };

    function handleRadioClick(index, name) {
        setRadioClicked(index)
        setRadioName(name) 
    };

    return (

        <>
            <div className="stations-section" >
            
            {radioData.map((el, index) => 
                
                <div key={index} className="stations-container">

                {radioClicked === index ? (
                    <div className="picture-section">
                        <FontAwesomeIcon className="controls fa-2x" onClick={() => handleMinusClick()} icon={faMinusSquare}/>
                        <img className="radio-img" src={el.image} alt="a"></img>
                        <FontAwesomeIcon className="controls fa-2x" onClick={() => handlePlusClick()} icon={faPlusSquare}/>
                    </div>) : null}

                    <div>
                        <button className="station-btn" onClick={() => handleRadioClick(index, el.name)}>
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