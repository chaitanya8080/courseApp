import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course';


import Sidebar from '../Sidebar';
import CourseModel from './CourseModel';

const AdminCourses = () => {


  const dispatch = useDispatch()



  const {course, lectures}= useSelector((state)=>state.course)

  const {loading,error,message} = useSelector((state)=>state.admin)

  const {isOpen, onClose, onOpen} = useDisclosure()

  const [courseIdfordelete , setCourseId] = useState("")
  const [courseTitle , setCourseTitle] = useState("")

 const courseDetailsHandler =(courseId, title)=>{
  dispatch(getCourseLectures(courseId))
  onOpen();
  setCourseId(courseId)
  setCourseTitle(title)
 }

 const deleteButtonHandler = (courseId)=>{
    dispatch(deleteCourse(courseId))
 }

 const deleteLectureButtonHandler = async (courseId, lectureId)=>{
   await dispatch(deleteLecture(courseId,lectureId))

   dispatch(getCourseLectures(courseId));
 }

const addLectureHandler = async (e,courseId, title, description, video)=>{
  
  e.preventDefault()
   console.log({courseId, title,description})
  const myForm = new FormData();
  myForm.append('title', title)
  myForm.append('description',description)
  myForm.append('file',video)
  await dispatch(addLecture(courseId,myForm))

  dispatch(getCourseLectures(courseId))
}


useEffect(() => {
  if (error) {
    toast.error(error);
    dispatch({ type: 'clearError' });
  }
  if (message) {
    toast.success(message);
    dispatch({ type: 'clearMessage' });
  }

  dispatch(getAllCourses())

}, [dispatch, error, message]);

  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overFlowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table varient="simple" size="lg">
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
          {  course.map(item=>(
             <Row 
             courseDetailsHandler={courseDetailsHandler}
             deleteButtonHandler={deleteButtonHandler}
             loading={loading}
             item={item}
              key={item._id}/>
          ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModel 
        isOpen={isOpen} 
        onClose={onClose} 
        lectures={lectures}
        id={courseIdfordelete}
        courseTitle={courseTitle}
        deleteButtonHandler={deleteLectureButtonHandler}
        addLectureHandler={addLectureHandler}
        loading={loading}
         />
   

      </Box>

      <Sidebar />
    </Grid>
  );
};



function Row({item, courseDetailsHandler, deleteButtonHandler,loading}) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
         <Image src={item.poster.url}></Image>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td>{item.views}</Td>
      <Td>{item.noOfVideos}</Td>
  
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} varient={'outline'} color="purple.500" Change Role>
          <Button children='View Lectures'
           varient='outline'
           color='purple.500' 
           onClick={()=>courseDetailsHandler(item._id,item.title)}
           isLoading={loading}
           />
          <Button isLoading={loading} color={'purple.600'}
            onClick={()=>deleteButtonHandler(item._id)}
          >
           Delete
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}


export default AdminCourses;
