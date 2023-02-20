import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';


import Sidebar from '../Sidebar';

const Users = () => {
  const users = [{
    _id:'one',
    name:'one name it is',
    role:'admin',
    email:'one@123',
    subscription:{status:'active'},
  }];



 const updateHandler =(userId)=>{
  console.log(userId)
 }

 const deleteButtonHandler = (userId)=>{
  console.log(userId)
 }

  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overFlowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table varient="simple" size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
          {  users.map(item=>(
             <Row 
             updateHandler={updateHandler}
             deleteButtonHandler={deleteButtonHandler}
             item={item}
              key={item._id}/>
          ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({item, updateHandler, deleteButtonHandler}) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'} varient={'outline'} color="purple.500" Change Role>
          <Button children='change role'
           varient='outline'
           color='purple.500' 
           onClick={()=>updateHandler(item._id)}
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
