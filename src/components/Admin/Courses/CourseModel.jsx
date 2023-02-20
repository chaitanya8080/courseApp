import {
  Box,
  Button,
  Grid,
  Heading,
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
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { fileUploadCss } from '../../Auth/Register';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModel = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  lectures = [1,2,3,4],
  courseTitle,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState();
  const [videoPrv, setVideoPrv] = useState();


  const fileUploadStyle = {
    '&::file-selector-button': 
    {...fileUploadCss,
       color:"purple"
    },
  };

  const changeVideoHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
        setVideoPrv(reader.result);
        setVideo(file)
    }
  }

  const handleClose = ()=>{
    setTitle('')
    setDescription('')
    setVideo('')
    setVideoPrv('')
    onClose();
  }

  return (
    <Modal isOpen={isOpen} size="full" onClose={handleClose}
     scrollBehavior='inside'
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody p="16">
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my="5">
                <Heading children={courseTitle}></Heading>
                <Heading children={`#${id}`} size="sm" opacity={0.4}></Heading>
              </Box>

              <Heading children={'Lectures'} size="lg" />
              {lectures.map((item,i)=>(
                         <VideoCard
                         key={i}
                         num={i+1}
                         title="First video "
                         description="this is intro lecure"
                         lectureId="1222"
                         courseId={id}
                         deleteButtonHandler={deleteButtonHandler}
                       />
              ))}
         
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lecture"
                    size="md"
                    textTransform={'uppercase'}
                  ></Heading>
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  ></Input>

                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  ></Input>

<Input
              accept="video/mp4"
              required
              id="chooseAvatar"
              type={'file'}
              placeholder="enter your password"
              focusBorderColor="purple.300"
              css={fileUploadStyle}
              onChange={changeVideoHandler}
            />

            {videoPrv && 
            (<video
             controlsList='nodownload'
             controls
             src={videoPrv}
            ></video>)}

            <Button w={'full'} colorScheme={'purple'} type='submit'>Upload</Button>

                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>


        <ModalFooter>

          <Button onClick={handleClose}>Close</Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModel;

function VideoCard({
  num,
  title,
  description,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my="8"
      borderEndRadius={'lg'}
      boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading children={`#${num} ${title}`} size={'sm'}></Heading>

        <Text children={description}></Text>
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
