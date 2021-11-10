import { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { menuData } from './MenuJson';
import Tree from './Tree';
const Bonus = () => {
  useEffect(() => {
    document.title = 'Bonus';
  }, []);

  return (
    <Box w="900px" h="400px" bg="white" mx="auto" borderRadius="15px" p="4">
      <Flex justify="center">
        <Box>
          <Box>
            <Tree data={menuData} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bonus;
