import styled, { ThemeProvider } from 'styled-components';

import React, { useState } from 'react';
import Button from './Button';

const theme = {
  primary: 'red',
  secondary: 'green',
  font: 'sans-serif'
}


const CounterWrapper = styled.div`
height:40%;
margin-top: 90%;
`

const CounterSpan = styled.span`
height: 37px;
width: 47px;
border-radius: 8px;
//background:${(props) => props.theme.primary};//a span háttere piros lesz a téma szerint
background: #56b7b9;
font-family: ${(props) => props.theme.font};//a span betutipusa sans-serif lett a téma szerint
box-shadow: inset 5px 5px 9px #898989,
            inset -5px -5px 9px #ffffff;
`


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    //tervezett téma sablon beillesztése
    <ThemeProvider theme={theme}>
      <CounterWrapper className="grid-item">
        <Button counted onClick={() => { setCount(count + 1); }} >+</Button>
        <CounterSpan id="counter">{count}</CounterSpan>
        <Button counted onClick={() => setCount(count - 1)}>-</Button>
      </CounterWrapper>
    </ThemeProvider>
  );
}

export default Counter