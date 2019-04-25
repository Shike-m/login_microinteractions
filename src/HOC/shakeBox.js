import React, { Component } from 'react';
import "./shakeBox.css";

const ShakeBox = (Target) => {
    return class extends Component {
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
                <Target
                    {...this.props}
                    onClick={()=>this.handleClick}
                  
                />
            )
        }
    }
}
export default ShakeBox;