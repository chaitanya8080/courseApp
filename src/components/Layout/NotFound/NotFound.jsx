import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container height={'90vh'} >
          
    
          <VStack justifyContent={'center'} h='full' spacing={'4'}>

            <RiErrorWarningFill size={'5rem'}/>
          <Heading my="8" textAlign={'center'}>
            Page Not Found
          </Heading>
            <Link to='/'>
                <Button varient={'ghost'}>Go to Home</Button>
            </Link>
    
            <Heading size={'sx'}>
                Referance: temporary things
            </Heading>
          </VStack>
        </Container>
      );
}

export default NotFound








