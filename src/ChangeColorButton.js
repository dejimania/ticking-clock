import React from 'react';

class ChangeCollorButton extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.clickHandler();
        //console.log("Clicked!")
    }
    render(){
        return (
            <button onClick={this.handleClick}>Change the color</button>
        );
    }
}

export default ChangeCollorButton;