import React, { useEffect, useState } from "react";

import axios from "axios";

export default function RadioMenu() {

    const [radioData, setRadioData] = useState([]);
    const [radioClicked, setRadioClicked] = useState();
        
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
        if (counter < 3){
            setRadioClicked(counter +=1)
        }
    }

    const handleMinusClick = (e) => {
        let counter = radioClicked;
        e.preventDefault();
        if (counter > 0){
            setRadioClicked(counter -=1)
        }
    }

    console.log(radioData)


    return (
        <>
            <ul>
                {radioData.map((el, index) => 
                    <li key={index}>
                        
                        <button onClick={() => setRadioClicked(index)}>{el.name} {el.frequency}</button> 
                        {radioClicked === index ? (<>
                        <button onClick={e => handleMinusClick(e)}>-</button>
                        <img src={el.image} alt="a"></img>
                        <button onClick={e => handlePlusClick(e)}>+</button>
                        </>) : null}
                        
                    </li>)}
            </ul>
        </>
    );

}
