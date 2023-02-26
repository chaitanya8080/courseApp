import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { courseRequest } from '../../redux/actions/others';

const Request = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')

    const dispatch = useDispatch()

    const {loading,error,message} = useSelector(state=>state.other)

    const submitHandler = (e)=>{
         e.preventDefault()

         dispatch(courseRequest(name,email,course))
    }


    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
  
    
    }, [dispatch, error, message]);

  return (
    <Container h="92vh">
      <VStack h='full' justifyContent={'center'} spacing='16'>
        <Heading children="Request New Course"/>
          <form style={{ width: '100%' }}
          onSubmit={submitHandler}
          >
            <Box my={'4'}>
              <FormLabel htmlFor="name" children="Name"></FormLabel>
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type={"text"}
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
                type={"email"}
                placeholder="Enter Your email"
                focusBorderColor="yellow.500"
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="course" children="Message"></FormLabel>
              <Textarea
                required
                id="course"
                value={course}
                onChange={e => setCourse(e.target.value)}
                placeholder="explain about course"
                focusBorderColor="yellow.500"
              />
            </Box>

              <Button my="4" colorScheme={'yellow'} type="submit" 
               isLoading={loading}
               >
               Send Mail
              </Button>

              <Box my="4">
            Aee available courses?{' '}
            <Link to="/courses">
              <Button colorScheme={'yellow'}
              varient='link'
              >Click </Button> {" "} here 
            </Link>
          </Box>
           
          </form>
      </VStack>
    </Container>
  );
};

export default Request;
