import React from 'react';
import ChangeColorButton from './ChangeColorButton';

class ColoredBlock extends React.Component {
    render() {
        return (
            <div style={{height: '200px', width: '200px', color: 'red'}}>
                <ChangeColorButton></ChangeColorButton>
            </div>
        )
    }
}

export default ColoredBlock;