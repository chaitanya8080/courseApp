import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container height={'90vh'} p="16">
      <Heading my="8" textAlign={'center'}>
        You Have Pro Pack
      </Heading>

      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w="full"
          bg="yellow.400"
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >

            <Text color={'balck'}>
                Payment Success
            </Text>
        </Box>

        <Box p='4'>
            <VStack textAlign={'center'} px='8' mt='4' spacing={'8'}>
            <Text>
                congratulation you're a pro member. You have access to premium content
            </Text>
            <Heading>
                <RiCheckboxCircleFill/>
            </Heading>
            </VStack>
        </Box>

        <Link to='/profile'>
            <Button varient={'ghost'}>Go to Profile</Button>
        </Link>

        <Heading size={'sx'}>
            Referance: temporary things
        </Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
