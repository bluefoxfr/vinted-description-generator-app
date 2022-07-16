import type { ComponentStyleConfig } from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
    bg: 'none',
    color: 'white',
    borderColor: '#515B6E',
    focusBorderColor: '#2C8857',
    _placeholder: {
      color: '#515B6E',
    }
  },
  sizes: {},
  variants: {
    custom: {
      bg: 'none',
      color: 'white',
      borderColor: '#515B6E',
      focusBorderColor: '#2C8857',
      _placeholder: {
        color: '#515B6E',
      },
    }
  }
}

export default Input;