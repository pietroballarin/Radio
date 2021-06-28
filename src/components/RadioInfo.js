import React, { useState } from 'react';

export default function RadioInfo(props) {


    return (
        <div>
            <h3>You are listening to</h3>
            <p>{props.radioName}</p>
        </div>
    )
}
