import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ChakraProvider>
      <Box className="app">
        <BrowserRouter></BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
