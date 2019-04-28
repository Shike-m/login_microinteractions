import React from 'react';
import styled from 'styled-components';
import "./shakeBox.css";
// import ShakeBox from '../HOC/shakeBox'


const Label = styled.label`
    font-size:16px;
    margin: 10px;
    padding: 10px;
`;
const Input = styled.input`
   border:1px solid black;
   margin: 10px;
   padding: 10px;
`;

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     inputName: '',
        //     inputValue:''
        // }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        e.preventDefault();
        // console.log("handlechange in inputbox", e.target.value);
        // const ev = e.target; //must defined in advance, 
                            // otherwise cannot read event in functional setState;
        // this.setState((ev)=>({
        //         inputName: ev.value,
        //         inputValue: ev.value,
            
        // }));
        // this.setState({
        //     inputName: e.target.name,
        //     inputValue:e.target.value
        // })
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.props.handleLoginChange(inputName, inputValue);//data flow is single direction,state cannot up flow
    }
    render() {
        const { className,inputType, title } = this.props;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}
                className={className}>
                <Label>{title}
                    <Input type={inputType} name={title}
                        placeholder={title} onChange={this.handleChange} />  
                </Label>
            </div>
        )
    }



}
export default InputBox;