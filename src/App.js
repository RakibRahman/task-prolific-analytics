import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Info from './components/Info';
import Search from './components/Search';
import Form from './components/Form';
import Bonus from './components/Bonus';
function App() {
  return (
    <ChakraProvider>
      <Box className="app">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-form" element={<Form />} />
            <Route path="/bonus" element={<Bonus />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
