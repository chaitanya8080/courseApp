import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="welcome" my="8" textAlign={'center'}></Heading>

      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg="yellow.400" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children={'Pro Pack = R399.00'}></Text>
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text
              
              children={'Join pro pack and get access to all content'}
            ></Text>
            <Heading size="md" children={'Rs 399.00 only'}></Heading>

            <Button my="8" w="full" colorScheme={'yellow'}>
              Buy Now
            </Button>
            <Box
              bg={'blackAlpha.600'}
              p="4"
              css={{ borderRadius: '0 0 8px 8px' }}
            >
              <Heading
                color={'white'}
                textTransform="uppercase"
                size="sm"
                children={'100% refund at cancellation'}
              />

              <Text
                fontSize={'xs'}
                color="white"
                children={'Terms and conditions Applied'}
              ></Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
