import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';
import ShakeBox from '../HOC/shakeBox';

const Wraper = styled.div`
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
        className: ""
    }
    handleSubmit = () => {
        if (this.state.username !== 'Tom' || this.state.password !== "123") {
            this.setState({
                className:"shake"
            })
        }
       
    }
    handleChange = (inputName,inputValue) => {  
        this.setState({
           [inputName]:[inputValue]
        })
       
    }
    
    render() {
        const { className } = this.state;
        return (
            <Wraper >
                <InputBox title="username" inputType="text"
                    className={className}
                    handleLoginChange={this.handleChange}
                />
                <InputBox title="password" inputType="password"
                    className={className}
                    handleLoginChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Log in</button>
            </Wraper>
        )
    }
}

export default ShakeBox(Login);