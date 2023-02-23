import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import Loader from '../Layout/Loader/Loader';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import introVideo from '../../assets/videos/bubbleSort.mp4';
import { getCourseLectures } from '../../redux/actions/course';
import { useParams, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const { lectures, loading } = useSelector(state => state.course);

  // console.log("data",data)
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [params.id, dispatch]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    toast('Not subscribed, first subscribe to the course');
    return <Navigate to={'/subscribe'}></Navigate>;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
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
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            ></Heading>
            <Heading m="4" children="Description" />

            <Text m="4" children={lectures[lectureNumber].description}></Text>
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
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
        </>
      ) : (
        <Text>No Lecture Found</Text>
      )}
    </Grid>
  );
};

export default CoursePage;
