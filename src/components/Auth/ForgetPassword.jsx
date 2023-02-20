import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {

    const [email, setEmail]= useState('')

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center','left']}
        />

        <VStack>
        <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
              focusBorderColor="yellow.500"
            />

            <Button type='submit' w={'full'} colorScheme='yellow'>
                Submit
            </Button>
        </VStack>


      </form>
    </Container>
  );
};

export default ForgetPassword;
