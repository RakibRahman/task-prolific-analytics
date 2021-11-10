import useFetch from './useFetch';
import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
const User = () => {
  const imgUrl = 'https://picsum.photos/id/1005/90/90';
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <Box fontSize="14px">
      <Text fontWeight="bold" textAlign="left" my="2">
        User List
      </Text>
      <VStack>
        {data.map(user => (
          <Flex
            key={user.id}
            border="1px solid gray"
            borderRadius="5px"
            width="400px"
            height="150px"
            gridGap="2"
            p="3"
          >
            <Image src={imgUrl} alt="user photo" borderRadius="10px" />
            <VStack textAlign="left">
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
