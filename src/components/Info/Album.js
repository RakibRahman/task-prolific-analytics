import useFetch from './useFetch';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
const Album = () => {
  const imgUrl = 'https://picsum.photos/id/101/90/90';
  const { data } = useFetch('https://jsonplaceholder.typicode.com/albums');
  return (
    <Box>
      <VStack>
        <Text>Album List </Text>
        {data.map(album => (
          <Flex key={album.id}>
            <Image src={imgUrl} />
            <Text>{album.title}</Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Album;
