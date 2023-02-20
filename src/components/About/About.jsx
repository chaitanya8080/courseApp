import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/bubbleSort.mp4';

import termsAndConditon from '../../../src/assets/docs/termsAndCondition';

import { RiSecurePaymentFill } from 'react-icons/ri';
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src="" boxSize={['40', '48']} />
      <Text children="Co-founder" opacity={0.7}></Text>
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Chaitanya Girase" size={['md', 'xl']}></Heading>
      <Text
        textAlign={['center', 'left']}
        children={
          'Hi, I am Full Stack Developer and Teacher. Our mission is to create quality content at resonable price'
        }
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndConditon }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms and Condition"
      textAlign={['center', 'left']}
      my="4"
    ></Heading>
    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text letterSpacing={'widest'} textAlign={['center', 'left']}>
        {termsAndConditon}
      </Text>
      <Heading my='4' size={'xs'} children='refund is available for cancelation in 7 days'/>
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" />

      <Founder />

      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          we are videos streaming platform witth some premium courses available
          only for premium users
        </Text>
        <Link to="/subscribe">
          <Button varient={'ghost'} colotScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndConditon={termsAndConditon.data}></TandC>
      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Rozerpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
