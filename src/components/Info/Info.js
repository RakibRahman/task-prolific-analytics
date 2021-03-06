import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import User from './User';
import Album from './Album';
const Info = () => {
  React.useEffect(() => {
    document.title = 'Info';
  }, []);
  return (
    <Box
      w={{ sm: '100%', lg: '900px' }}
      minH="400px"
      bg="white"
      mx="auto"
      borderRadius="15px"
      p="4"
    >
      <Flex flexWrap="wrap">
        <User />
        <Spacer />
        <Album />
      </Flex>
    </Box>
  );
};

export default Info;
