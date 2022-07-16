import React from 'react';
import './App.css';
import { Body, Title, Separator, ExampleCard, Desc, Signature, SubmitButton } from './App.style';

function App() {
  return (
    <Body>
        <Title>Vinted
        Description Generator</Title>
      <Separator src='/separator.svg' />
      <Desc>Make easier your description</Desc>
      <ExampleCard src='/exampleCard.svg' />
      <SubmitButton colorScheme='#007782' size='lg'>
        Let's go!
      </SubmitButton>
      <Signature>Made by bluefox with ❤️</Signature>
    </Body>
  );
}

export default App;
