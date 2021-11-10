import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Flex
        gridGap="5"
        bg="#4C526A"
        color="#D2DBE3"
        align="center"
        justify="start"
        pl="20rem"
        py="5"
        mb="3"
      >
        <Link to="/">
          <Text fontSize="20px">Home</Text>
        </Link>

        <Link to="/search">
          <Text fontSize="20px">Search</Text>
        </Link>

        <Link to="/my-form">
          <Text fontSize="20px">My Form</Text>
        </Link>

        <Link to="/info">
          <Text fontSize="20px">Info</Text>
        </Link>

        <Link to="/bonus">
          <Text fontSize="20px">Bonus</Text>
        </Link>
      </Flex>
    </div>
  );
};

export default NavBar;
