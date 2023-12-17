import styled from 'styled-components';


const Button = styled.button`
height: 65px;
width: ${props => props.counted ? '' : '70%'};
font-family: roboto;
font-size: 1.6em;
color: white;
text-align: center;
border: none;
margin: 1.5em 1em;
padding: 0.25em 1em;
border-radius: 25px;
background:${props => props.counted ? '#30C5AA' : '#56b7b9'}; 
box-shadow:  23px 23px 46px #22494a,
             -23px -23px 46px #8affff;

transition: all 0.2s linear;
&:hover{
  transform: scale(${props => props.bigger ? 1.3 : 1.0}); 
}
&:hover{
  background:${props => props.counted ? '#2a9d8f' : '#56b7b9'}; 
}
`;
//bigger, counted props

export default Button;