import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';

import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'}></Heading>
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@chaitanya Girase"
            color={'yellow.400'}
          ></Heading>
        </VStack>
        <HStack spacing={['2', '10']} justifyContent="center" color={'white'} fontSize='40'>
          <a href="https://youtube.com" >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
