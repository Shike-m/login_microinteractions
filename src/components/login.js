import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './inputBox';

const Wraper=styled.div`
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
            <Wraper>
                <InputBox title="username" id="username" inputType="text" />
                <InputBox title="passward" id="passward" inputType="passward" />
            </Wraper>
        )
    }
}

export default Login;