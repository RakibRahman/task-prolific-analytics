import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import User from './User';
import Album from './Album';
const Info = () => {
  return (
    <Box w="900px" minH="400px" bg="white" mx="auto" borderRadius="15px" p="4">
      <Flex>
        <User />
        <Spacer />
        <Album />
      </Flex>
    </Box>
  );
};

export default Info;
