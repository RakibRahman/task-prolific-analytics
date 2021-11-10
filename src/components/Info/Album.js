import useFetch from './useFetch';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
const Album = () => {
  const imgUrl = 'https://picsum.photos/id/101/90/90';
  const { data } = useFetch('https://jsonplaceholder.typicode.com/albums');
  return (
    <Box>
      <Text fontWeight="bold" textAlign="left" my="2">
        Album List
      </Text>
      <VStack>
        {data.map(album => (
          <Flex
            key={album.id}
            border="1px solid gray"
            borderRadius="5px"
            width="400px"
            height="150px"
            gridGap="2"
            p="3"
          >
            <Image src={imgUrl} borderRadius="10px" alt="album cover" />
            <Text>{album.title}</Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Album;
