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
            <button onClick={this.handleClick}>I dont like {this.props.currentColor}</button>
        );
    }
}

export default ChangeCollorButton;