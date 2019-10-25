import React from 'react';
import { className } from 'postcss-selector-parser';



class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }
    render() {
        return(
            <p className="App-clock">
                The time is {this.state.time}
            </p>
        );
    }
}

export default Clock;