import React from 'react';
import { Flex, Box, Text, Heading, Image, Spacer } from '@chakra-ui/react';
const Home = () => {
  return (
    <Box w="900px" h="400px" bg="white" mx="auto" borderRadius="15px" p="4">
      <Flex>
        <Flex gridGap="1" align="start">
          <Image
            w="100px"
            h="100px"
            borderRadius="50%"
            src="https://cdn.dribbble.com/users/1068771/screenshots/14247776/media/fbf5f8ae629e3a6248006e748ddd6b67.jpg?compress=1&resize=400x300"
            alt="profile pic"
          />
          <Box>
            <Heading size="md">Md. Rakibur Rahman </Heading>
            <Text>Front End Developer (React)</Text>
          </Box>
        </Flex>
        <Spacer />
        <Box w="55%">
          <Heading size="md">About Myself</Heading>
          <Text lineHeight="7">
            Seeking a position as Front-End Developer in a professional setting
            that will enable me to learn new skills and give me the ability to
            utilize the ones I have acquired by making and (breaking) things.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
