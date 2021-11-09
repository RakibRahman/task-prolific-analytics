import useFetch from './useFetch';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
const User = () => {
  const imgUrl = 'https://picsum.photos/id/1005/90/90';
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <Box border="1px">
      <VStack>
        <Text>User List </Text>

        {data.map(user => (
          <Flex key={user.id}>
            <Image src={imgUrl} alt="user photo" />
            <VStack spacing={5}>
              <Text fontWeight="bold">{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.phone}</Text>
              <Text>{user.address.city}</Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default User;
