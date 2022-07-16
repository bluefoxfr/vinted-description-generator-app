import { extendTheme } from "@chakra-ui/react";
import Button from './buttonStyles';
import Input from "./inputStyles";

const theme = extendTheme({
  colors: {
    primary: "#007782",
    secondary: "#3C7479",
    highlight: "#0D3B3F",
  },
  components: {
    Button,
  }
})


export default theme;