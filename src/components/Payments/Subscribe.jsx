import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';


import React from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { buySubscription, loadUser } from '../../redux/actions/user';


const Subscribe = () => {
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const subscribeHandler = async () => {

     dispatch(buySubscription());
 

    navigate('/profile');

    dispatch(loadUser())
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      toast.success('subscription Id generated and user subscribed');
    }
  }, [dispatch, error, subscriptionId]);

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

            <Button
              onClick={subscribeHandler}
              my="8"
              w="full"
              colorScheme={'yellow'}
              isLoading={loading}
            >
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
