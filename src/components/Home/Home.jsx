import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Link,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import './home.css';
import vg from '../../assets/images/logo.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/bubbleSort.mp4';

const Home = () => {
  return (
    <div>
      <section className="home">
        <Stack
          direction={['column', 'row']}
          py={'100'}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading
              textAlign={'center'}
              children="LEARN FROM THE EXPERTS"
              size={'2xl'}
            ></Heading>
            <Text children="Find valuable content at resonable price" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-grapics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
            width="70%"
          ></Image>
        </Stack>
      </section>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="Our Brands"
        ></Heading>
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop={'4'}
          textAlign={'center'}
        >
          <CgGoogle></CgGoogle>
          <CgYoutube></CgYoutube>
          <SiCoursera></SiCoursera>
          <SiUdemy></SiUdemy>
          <DiAws></DiAws>
        </HStack>
      </Box>

      <div className="container2">
        <video
          //    autoPlay={true}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </div>
  );
};

export default Home;
