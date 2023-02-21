import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
const ChangePassword = () => {

const [oldPassword, setOldPassword] = useState('')
const [newPassword, setNewPassword] = useState('')

const {loading, message, error} = useSelector(state=>state.profile)

const dispatch = useDispatch();

const submitHandler = (e)=>{
  e.preventDefault()
 
  dispatch(changePassword(oldPassword,newPassword))
}



useEffect(()=>{
  if(error){
    toast.error(error)
    dispatch({type:"clearError"})
  }
  if(message){
    toast.success(message)
    dispatch({type:"clearMessage"})
  }
},[dispatch,error,message])

  return (
    <Container py={'16'} minH={'90vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          textTransform={'uppercase'}
          m
          children="Change Password"
          my="16"
          textAlign={['center','left']}
        ></Heading>

        <VStack spacing='8'>
           <Input
              required
        
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              type="text"
              placeholder="enter Old password"
              focusBorderColor="yellow.500"
            />

            <Input
              required
         
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              type="text"
              placeholder="enter New password"
              focusBorderColor="yellow.500"
            />

            <Button isLoading={loading} w='full' colorScheme={'yellow'} type='submit' >Change</Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
