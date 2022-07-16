import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import { ChakraProvider } from "@chakra-ui/react";
import theme from './styles/theme';
import Generate from './pages/Generate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/generate' element={<Generate />} />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
