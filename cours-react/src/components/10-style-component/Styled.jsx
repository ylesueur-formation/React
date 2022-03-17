import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: red;
    background-color: coral;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

export class Styled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (
        <>
            <Title>Hello World !</Title>
            <h1>Salut !</h1>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton>Tomate</TomatoButton>
        </>
        )
    }
}