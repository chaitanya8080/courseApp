import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading children="Welcome to Courses"></Heading>

        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address"></FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="emter your email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password"></FormLabel>
            <Input
              required
              id="email"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="email"
              placeholder="enter your password"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} varient={'ghost'}>
                Forget Password
              </Button>
            </Link>

            <Button my="4" colorScheme={'yellow'} type="submit">
              Login
            </Button>
          </Box>

          <Box my="4">
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'}
              varient='link'
              >Sign Up</Button> {" "} here 
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
