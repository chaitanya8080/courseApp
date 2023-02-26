import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/others';

const Contact = () => {

  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { loading, message:msg, error } = useSelector(state => state.other);


  const dispatch = useDispatch();

 

  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (msg) {
      toast.success(msg);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, msg]);

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }} onSubmit={submitHandler}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name"></FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              type={'text'}
              placeholder="Enter Your Name"
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
              type='email'
              placeholder="Enter Your email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message"></FormLabel>
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            my="4"
            colorScheme={'yellow'}
            type="submit"
            isLoading={loading}
          >
            Send Mail
          </Button>

          <Box my="4">
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} varient="link">
                Click{' '}
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
