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
    render() {
        return (
            <Wraper onSubmit={this.handleSubmit}>
                <InputBox title="username" id="username" inputType="text" />
                <InputBox title="password" id="password" inputType="password" />
                <button>Log in</button>
            </Wraper>
        )
    }
}

export default ShakeBox(Login);