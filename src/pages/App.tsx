import React from 'react';
import { Body, Title, Separator, ExampleCard, Desc, Signature, SubmitButton } from './App.style';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Body>
        <Title><span style={{color: '#40B175'}}>Vinted</span>
        <span> Description</span><span>Generator</span></Title>
      <Separator src='/separator.svg' />
      <Desc>Make easier your description</Desc>
      <ExampleCard src='/exampleCard.svg' />
      <SubmitButton variant="solid" size='lg'>
        <Link to='/generate'>Let's go</Link>
      </SubmitButton>
      <Signature>Made by bluefox with ❤️</Signature>
    </Body>
  );
}

export default App;
