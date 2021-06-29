import React from "react";

export default function RadioInfo(props) {

    return (
        <div className="radio-info">
            <h3 className="btm-txt">YOU ARE LISTENING TO</h3>
            <p className="radio-info-msg">{props.radioName}</p>
        </div>
    );
};