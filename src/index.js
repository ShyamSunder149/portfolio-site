import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './components/theme';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
