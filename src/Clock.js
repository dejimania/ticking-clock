import React from 'react';
import { className } from 'postcss-selector-parser';


let time = new Date().toLocaleString();

class Clock extends React.Component {
    render() {
        return(
            <p className="App-clock">
                The time is {time}
            </p>
        );
    }
}

export default Clock;