import { Box, Button, Container, Grid, Heading, Image, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { fileUploadCss } from '../../Auth/Register';
import Sidebar from '../Sidebar';

const CreateCourse = () => {

  const [title , setTitle] = useState()
  const [description , setDescription] = useState()
  const [createdby ,setCreatedby] = useState()
  const [category , setCategory] = useState()
  const [image, setImage]= useState()
  const [imagePrv, setImagePrv] = useState()

  const categories = [
    'web development',
    'Artificial Intelligence',
    'Date Structure and algorithm',
    'Yoga',
  ];

  const fileUploadStyle = {
    '&::file-selector-button': 
    {...fileUploadCss,
       color:"purple"
    },
  };

  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=()=>{
        setImagePrv(reader.result);
        setImage(file)
    }
  }


  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
     <Container py='16'>
     <form>
         <Heading textTransform={'uppercase'}
            children='Create Course'
            my='16'
            textAlign={['center','left']}
        />
         <VStack
         margin={'auto'}
         spacing={'8'}
         >
           <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder={title}
            focusBorderColor="purple.300"
          />

          <Input
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder={description}
            focusBorderColor="purple.300"
          />

            <Input
            value={createdby}
            onChange={e => setCreatedby(e.target.value)}
            type="text"
            placeholder='creator name'
            focusBorderColor="purple.300"
          />

          <select  focusBorderColor="purple.300" 
          value={category}
          onChange={e=>setCategory(e.target.value)}
          >
          <option value="">Category</option>

          {categories.map(item=>(
               <option value={item}
                
               >{item}</option>
          ))}

          </select>

          <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type={'file'}
              placeholder="enter your password"
              focusBorderColor="purple.300"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />


            {imagePrv && (
              <Image src={imagePrv} boxSize='64' objectFit={'contain'} />
            )}

            <Button width={'full'} colorScheme='purple' type='submit'>
              Create
            </Button>
         </VStack>
     </form>

     </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
