import React, { useState } from 'react';
import { Body, Title, Separator, ResultContainer } from './Generate.style';
import Input from '../Components/Input/Input.component';
import { Button } from '@chakra-ui/react';

function Generate() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [sexe, setSexe] = useState('');
  const [brand, setBrand] = useState('');
  const [origin, setOrigin] = useState('');

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  };

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  };

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  };

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  };

  const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
  };

  const handleSexe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSexe(event.target.value)
  };

  const handleBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value)
  };

  const handleOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(event.target.value)
  };

  const [resultVisibility, setResultVisibility] = useState(false);

  const clickResult = () => {
    setResultVisibility(true);
  }

  console.log(resultVisibility);
  return (
    <Body>
        <Title visible={true}><span style={{color: '#40B175'}}>Make</span>
        <span> your</span><span>description</span></Title>
        <Input icon='✏️' placeholder='Name of product' onChange={handleName} />
        <Input icon='🌈' placeholder='Color of product' onChange={handleColor} />
        <Input icon='♻️' placeholder='State of product' onChange={handleState} />
        <Input icon='💵' placeholder='Price of product' onChange={handlePrice} />
        <Input icon='📏' placeholder='Size of product' onChange={handleSize} />
        <Input icon='🚻' placeholder='Sexe of product' onChange={handleSexe} />
        <Input icon='™️' placeholder='Brand of product' onChange={handleBrand} />
        <Input icon='🌎' placeholder='Origin of product' onChange={handleOrigin} />
        <Separator src='/separator.svg' />
        <ResultContainer>
          <span style={{ fontStyle: 'italic', marginBottom: '20px' }}>Your custom description: </span>
          {name !== '' ? <span>✏️ {name}</span> : null}
          {color !== '' ? <span>🌈 {color}</span> : null}
          {state !== '' ? <span>♻️ {state}</span> : null}
          {price !== '' ? <span>💵 {price}</span> : null}
          {size !== '' ? <span>📏 {size}</span> : null}
          {sexe !== '' ? <span>🚻 {sexe}</span> : null}
          {brand !== '' ? <span>™️ {brand}</span> : null}
          {origin !== '' ? <span>🌎 {origin}</span> : null}
        </ResultContainer>
    </Body>
  )
}

export default Generate;