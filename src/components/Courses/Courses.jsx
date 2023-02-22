import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  description,
  creator,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60"></Image>
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      ></Heading>
      <Text noOfLines={2} children={description}></Text>
      <HStack>
        <Text
          fontFamily={'bold'}
          textTransform="uppercase"
          noOfLines={2}
          children={'creator'}
        ></Text>
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          noOfLines={2}
          children={creator}
        ></Text>
      </HStack>
      <Text noOfLines={2} children={description}></Text>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
      />
      <Heading size="xs" children={`Views - ${views}`} />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button
            varient={'ghost'}
            colorScheme={'yellow'}
          >
            Watch Now
          </Button>
        </Link>

        <Button
            varient={'ghost'}
            onClick={()=>addToPlaylistHandler(id)}
          >
             Add To Playlist
          </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setkeyword] = useState('');

  const [category, setCategory] = useState('');

  const dispatch = useDispatch()

const {loading, course, error} = useSelector(state=>state.course)



  const addToPlaylistHandler =(courseId)=>{
    console.log("Playlist added", courseId);
  }

  const categories = [
    'web development',
    'Artificial Intelligence',
    'Date Structure and algorithm',
    'Yoga',
  ];


  useEffect(()=>{
        dispatch(getAllCourses(keyword , category))

        if(error){
          toast.error(error.message)
          dispatch({type:"clearError"})
        }
   
  },[error,dispatch,keyword,category])


  return (
    <Container minH={'95vh'} maxW="container.lg" padding={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={(e)=> setkeyword(e.target.value)}
        placeholder="Search a course"
        type={'text'}
      ></Input>

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
            <Text children={item}></Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
  {course.length>0 ? (course.map((item)=>(
          <Course
          key={item._id}
          title={item.title}
          description={item.description}
          views={item.views}
          imageSrc={item.poster.url}
          id={item._id}
          creator={item.createdBy}
          lectureCount={item.noOfVideos}
        addToPlaylistHandler={addToPlaylistHandler}
        />
  ))):(<Text fontSize={"3xl"} mt="2em">Course Not Found</Text>)}
      </Stack>
    </Container>
  );
};

export default Courses;
