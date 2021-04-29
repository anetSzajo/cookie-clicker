import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    shadows: {
        outline: 'none'
    },
})

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
  </StrictMode>,
  rootElement
);
