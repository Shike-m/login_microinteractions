import React, { Component } from 'react';
// import "./shakeBox.css";

const ShakeBox = (WrappedComponent) => {
    
    class ShakeBox extends Component {
       
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    // className='shake'
                />
            )
        }
    }
    ShakeBox.displayName = "InputBox_to_shake";
    return ShakeBox;
}
export default ShakeBox;