import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import {useNavigate} from "react-router-dom";

const UpdateProfile = ({user}) => {


    const [name , setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const {loading}= useSelector(state=>state.profile)
    const dispatch = useDispatch();


    const navigate = useNavigate()

    const submitHandler =  async e=>{
      e.preventDefault()
     
      await dispatch(updateProfile(name,email));

      dispatch(loadUser())
    
      navigate('/profile');

    }

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          m
          children="Update Profile"
          my="16"
          textAlign={['center', 'left']}
        ></Heading>

        <VStack spacing="8">
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Name"
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            focusBorderColor="yellow.500"
          />

          <Button w="full" colorScheme={'yellow'} type="submit" isLoading={loading} >
           Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
