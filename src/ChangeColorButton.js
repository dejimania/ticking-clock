import React from 'react';

class ChangeCollorButton extends React.Component {
    handleClick() {
        console.log("Clicked!")
    }
    render(){
        return (
            <button onClick={this.handleClick}>Change the color</button>
        );
    }
}

export default ChangeCollorButton;