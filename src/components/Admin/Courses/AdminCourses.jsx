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
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';


import Sidebar from '../Sidebar';
import CourseModel from './CourseModel';

const AdminCourses = () => {
  const courses = [{
    _id:'1111',
    title:'React Course',
    category:'Web development',
    createdBy:'Chaitanya G',
    poster:{url:'active'},
    views:456,
    noOfVideos :33
  }];

  const {isOpen, onClose, onOpen} = useDisclosure()

 const courseDetailsHandler =(userId)=>{
  onOpen();
 }

 const deleteButtonHandler = (userId)=>{
  console.log(userId)
 }

 const deleteLectureButtonHandler =(courseId, lectureId)=>{
  console.log(courseId)
  console.log(lectureId)
 }

const addLectureHandler =({e,courseId,title,description,video})=>{
  
  e.preventDefault()

}

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
          {  courses.map(item=>(
             <Row 
             courseDetailsHandler={courseDetailsHandler}
             deleteButtonHandler={deleteButtonHandler}
             item={item}
              key={item._id}/>
          ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModel 
        isOpen={isOpen} 
        onClose={onClose} 
        id={'asdfasdf'}
        courseTitle='React Course'
        deleteButtonHandler={deleteLectureButtonHandler}
        addLectureHandler={addLectureHandler}
         />
   

      </Box>

      <Sidebar />
    </Grid>
  );
};



function Row({item, courseDetailsHandler, deleteButtonHandler}) {
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
           onClick={()=>courseDetailsHandler(item._id)}
           />
          <Button color={'purple.600'}
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
