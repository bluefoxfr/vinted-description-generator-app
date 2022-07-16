import React from 'react';
import { Body, Title, Separator, Icon, MyInput } from './Generate.style';
import { Button, InputGroup, Stack, InputLeftElement } from '@chakra-ui/react';

function Generate() {
  const arrInput = [
    {
      iconValue: '✏️',
      placeholder: 'Name of product',
    },
    {
      iconValue: '🌈',
      placeholder: 'Color of product',
    },
    {
      iconValue: '♻️',
      placeholder: 'State of product',
    },
    {
      iconValue: '💵',
      placeholder: 'Price of product',
    },
    {
      iconValue: '📏',
      placeholder: 'Size of product',
    },
    {
      iconValue: '🚻',
      placeholder: 'Sexe of product',
    },
    {
      iconValue: '™️',
      placeholder: 'Brand of product',
    },
    {
      iconValue: '🌎',
      placeholder: 'Origin of product',
    },
  ];
  return (
    <Body>
        <Title><span style={{color: '#40B175'}}>Make</span>
        <span> your</span><span>description</span></Title>
        {arrInput.map((item) => (
          <Stack spacing={4}>
            <InputGroup style={{minWidth: '350px'}}>
              <InputLeftElement
                color="white"
                pointerEvents='none'
                children={<Icon>{item.iconValue}</Icon>}
            />
              <MyInput color="white" borderColor='#515B6E' focusBorderColor='#2C8857' placeholder={item.placeholder} />
            </InputGroup>
          </Stack>
        ))}
        <Separator src='/separator.svg' />
        <Button variant="solid" size="lg">
          Generate your description
        </Button>
    </Body>
  )
}

export default Generate;