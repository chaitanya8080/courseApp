import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/bubbleSort.mp4';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'one',
      title: 'one ex',
      description: 'new videos for learning ',
      video: {
        url: 'newurlone',
      },
    },
    {
      _id: 'one',
      title: 'two ex',
      description: 'new videos for learning ',
      video: {
        url: 'newurlone',
      },
    },
    {
      _id: 'one',
      title: 'three ex',
      description: 'new videos for learning ',
      video: {
        url: 'newurlone',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          autoPlay
          muted
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        ></Heading>
        <Heading m="4" children="Description" />

        <Text m="4" children={lectures[lectureNumber].description}></Text>
      </Box>

      <VStack>
        {lectures.map((element, index) => (
          <button
           onClick={()=>setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <text noOfLines={1}>
              #{index + 1} {element.title}
            </text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
