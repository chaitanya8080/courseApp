import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width:'110%',
    border:'none',
    height:'100%',
    color:'#ECC94B',
    backgroudColor: 'white',
}

export const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrv, setImagePrv] = useState('');
const [image, setImage] = useState('')

  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
        setImagePrv(reader.result);
        setImage(file)
    }
  }

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children="registeration"></Heading>

        <form style={{ width: '100%' }}>
          <Box my="4" display={'flex'} justifyContent="center">
            <Avatar src={imagePrv} size={'2xl'} />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name"></FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Enter Your  Name"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address"></FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
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
              type={'text'}
              placeholder="enter your password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel
              htmlFor="chooseAvatar"
              children="Choose Avatar"
            ></FormLabel>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              placeholder="enter your password"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Box my={'4'}>
            <Button my="4" colorScheme={'yellow'} type="submit">
              Sign Up
            </Button>
          </Box>

          <Box my="4">
            Already signed up ?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} varient="link">
                {' '}
                Login{' '}
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
