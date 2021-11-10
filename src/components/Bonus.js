import React from 'react';
import { Box } from '@chakra-ui/react';

const Bonus = () => {
  React.useEffect(() => {
    document.title = 'Bonus';
  }, []);
  return (
    <Box w="900px" h="400px" bg="white" mx="auto" borderRadius="15px" p="4">
      home
    </Box>
  );
};

export default Bonus;
