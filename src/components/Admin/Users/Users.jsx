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
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, updateUserRole } from '../../../redux/actions/admin';
import Loader from "../../Layout/Loader/Loader"

import Sidebar from '../Sidebar';



const Users = () => {

  const {users,loading,error,message} = useSelector((state)=>state.admin)

  const dispatch = useDispatch()


 const updateHandler =(userId)=>{
  dispatch(updateUserRole(userId))
 }

 const deleteButtonHandler = (userId)=>{
  console.log(userId)
 }


 useEffect(()=>{

dispatch(getAllUsers())
 },[dispatch])


 
useEffect(() => {
  if (error) {
    toast.error(error);
    dispatch({ type: 'clearError' });
  }
  if (message) {
    toast.success(message);
    dispatch({ type: 'clearMessage' });
  }

}, [dispatch, error, message]);


  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading ? (<Loader></Loader>):(
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
          { users && users.map(item=>(
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
      )}

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
      <Td>{item.subscription && item.subscription.status === 'active' ? 'Active' : 'Not active'}</Td>
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
