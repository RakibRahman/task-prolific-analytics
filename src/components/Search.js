import { useState, useEffect, useRef } from 'react';
import { Box, Text, Input, Flex } from '@chakra-ui/react';

const Search = () => {
  const [value, setValue] = useState('Hello World');
  const inputRef = useRef();
  useEffect(() => {
    document.title = 'Search';
    inputRef.current.focus();
  }, []);

  return (
    <Box w="900px" h="400px" bg="white" mx="auto" borderRadius="15px" p="4">
      <Text fontSize="20px" fontWeight="bold">
        {value}
      </Text>
      <Flex
        align="center"
        justify="center"
        w="50%"
        mx="auto"
        my="120"
        borderRadius="5px"
      >
        <Input
          ref={inputRef}
          type="text"
          defaultValue={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        ></Input>
      </Flex>
    </Box>
  );
};

export default Search;
