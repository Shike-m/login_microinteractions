import React from 'react';
import styled from 'styled-components';
import ShakeBox from '../HOC/shakeBox';

const Label=styled.label`
    font-size:16px;
    margin: 10px;
    padding: 10px;
`;
const Input = styled.input`
   border:1px solid black;
   margin: 10px;
   padding: 10px;
`;
const InputBox=({title,id,inputType})=> {
            return (
                <div style={{display:'flex',alignItems:'center'}}>
                    <Label htmlFor={id} >{title}</Label>
                    <Input type={inputType} placeholder={title} id={id} />  
                </div>
            )
        
    
}
export default ShakeBox(InputBox);