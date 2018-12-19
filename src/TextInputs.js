import React, { Component } from 'react';

class TextInputs extends Component {
    render() {
        const {currentTopText, setTopText} = this.props;
        return (
            <div>
                <input 
                   type="text" 
                   value={currentTopText} 
                   onChange={setTopText} />
            </div>
        );
    }
}

export default TextInputs;