import type { ComponentStyleConfig } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
    borderRadius: 'base',
  },
  sizes: {},
  variants: {
    solid: {
      bg: '#007782',
      color: 'white',
      _hover: {
        bg: '#134B50',
      },
      _active: {
        bg: '#0C3336',
      }
    }
  }
}

export default Button;