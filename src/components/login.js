import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';
import ShakeBox from '../HOC/shakeBox';

const Wraper = styled.form`
    width: 40%;
    margin: 20px auto;
    padding: 20px 40px;
    border: 1px solid #747676;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background:#f6f6f6;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

class Login extends Component{
    state = {
        username: "Tom",
        password: "123",
        shakeable: false
    }
    handleSubmit = () => {
        if (this.state.username !== 'Tom' || this.state.password !== "123") {
            this.setState({
                shakeable:true
            })
        }
        console.log("submit",this.state.shakeable)
    }
    handleChange = (inputName,inputValue) => {
        console.log("onchnage",this.state.username)
        this.setState({
           [inputName]:[inputValue]
        })
        
    }
    render() {
        const { shakeable } = this.state;
        return (
            <Wraper onSubmit={this.handleSubmit} >
                <InputBox title="username" inputType="text"
                    className={shakeable ? "shake" : ""}
                    handleLoginChange={this.handleChange}
                />
                <InputBox title="password" inputType="password"
                    onChange={this.handleChange}
                />
                <button>Log in</button>
            </Wraper>
        )
    }
}

export default ShakeBox(Login);