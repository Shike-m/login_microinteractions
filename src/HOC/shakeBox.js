import React, { Component } from 'react';
import "./shakeBox.css";

const ShakeBox = (WrappedComponent) => {
    
    class ShakeBox extends Component {
       
        state = {
            s:false
        }
        handleClick = () => {
            console.log("onclick")
            this.setState({
                s: !this.state.s,
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    handleClick={()=>this.handleClick}
                    className='shake'
                />
            )
        }
    }
    ShakeBox.displayName = "InputBox_to_shake";
    return ShakeBox;
}
export default ShakeBox;