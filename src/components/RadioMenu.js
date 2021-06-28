import React, { useEffect, useState } from "react";
import RadioInfo from "./RadioInfo";

import axios from "axios";

export default function RadioMenu() {

    const [radioData, setRadioData] = useState([]);
    const [radioClicked, setRadioClicked] = useState();
    const [radioName, setRadioName] = useState('')
        
    useEffect(() => {
        getRadioData();
    }, []);

    const getRadioData = () => { 
        axios
        .get("https://teclead.de/recruiting/radios")
        .then((response) => {
            setRadioData(response.data.radios)
        })
        .catch((err) => err);
    }

    const handlePlusClick = (e) => {
        let counter = radioClicked;
        e.preventDefault();
        if (counter < radioData.length-1){
            setRadioClicked(counter +=1)
            setRadioName(radioData[counter].name)
        }
    }

    const handleMinusClick = (e) => {
        let counter = radioClicked;
        e.preventDefault();
        if (counter > 0){
            setRadioClicked(counter -=1)
            setRadioName(radioData[counter].name)
        }
    }

    return (
        <>
            {radioData.map((el, index) => 
                <div>

                {radioClicked === index ? (
                    <div>
                        <button onClick={e => handleMinusClick(e)}>-</button>
                        <img width="100px" src={el.image} alt="a"></img>
                        <button onClick={e => handlePlusClick(e)}>+</button>
                    </div>) : null}

                    <div onClick={() => setRadioName(el.name)}>
                        <button onClick={() => setRadioClicked(index)}>{el.name} {el.frequency}</button>
                    </div> 

                </div>
                
                
                )}
                <div>
                    {radioClicked >= 0 ? <RadioInfo radioName={radioName}/> : null}
                </div>
                
        </>
    );

}
