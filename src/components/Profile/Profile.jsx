import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  // useChakra,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'chaitanya',
    email: 'chaitanya@gmail',
    createdAt: new Date().toISOString(),
    role: 'user',
    subscription: {
      status: 'active',
    },
    playlist: [
      {
        course: 'asafas',
        poster: 'asjlfk',
      },
    ],
  };

  const removeFromPlayListHandler = id => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image)=>{
    e.preventDefault()
    console.log(image);
  }

const {isOpen, onClose, onOpen}= useDisclosure()


  return (
    <Container minH={'95vh'} maxW="container.lg" py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'} />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme={'yellow'} varient="ghost">
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'}></Text>
            <Text children={user.name}></Text>
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'}></Text>
            <Text children={user.email}></Text>
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'}></Text>
            <Text children={user.createdAt.split('T')[0]}></Text>
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription.status === 'active' ? (
                <Button color="yellow.600" varient="unstyle">
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="playlist" size={'md'} my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap="wrap"
          p="4"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              ></Image>

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button varient="ghost" colorScheme={'yellow'}>
                    Watch Now
                  </Button>
                </Link>

                <Button
                  onClick={() => removeFromPlayListHandler(element.course)}
                >
                  <RiDeleteBin7Fill></RiDeleteBin7Fill>
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox  isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({isOpen,onClose, changeImageSubmitHandler}) {

const [imagePrv, setImagePrv] =useState("")
const [image, setImage] =useState("")

  const changeImage = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
        setImagePrv(reader.result);
        setImage(file)
    }
  }
  
const closeHandler=()=>{
   onClose();
   setImagePrv("")
   setImage('')
}

  return (
    <Modal isOpen={isOpen} onClose={closeHandler} >
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e)=>changeImageSubmitHandler(e, image)}>
              <VStack spacing="8">
                {imagePrv && <Avatar src={imagePrv} boxSize={'48'} />}
                <Input
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button w='full' colorScheme={'yellow'} type='submit'>
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button m='3' onClick={closeHandler}>Cancle</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
