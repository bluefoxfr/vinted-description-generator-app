import React, {FC} from 'react';
import { InputGroup, Stack, InputLeftElement } from '@chakra-ui/react';
import { Icon, MyInput } from './Input.style';

interface InputProps {
  icon: string;
  placeholder: string;
  onChange: any;
}

const Input: FC<InputProps> = ({icon, placeholder, onChange }) => {
  return (
    <Stack spacing={4}>
    <InputGroup style={{minWidth: '350px'}}>
      <InputLeftElement
        color="white"
        pointerEvents='none'
        children={<Icon>{icon}</Icon>}
    />
      <MyInput color="white" borderColor='#515B6E' focusBorderColor='#2C8857' placeholder={placeholder} onChange={onChange} />
    </InputGroup>
  </Stack>
  )
} 

export default Input;