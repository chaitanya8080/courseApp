import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import Sidebar from '../Sidebar';
import { LineChart ,DoughnutChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    p="8"
    boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty}></Text>
      <HStack>
        <Text children={`${qtyPercentage}% `}>
          {profit ? (
            <RiArrowUpLine color="green"></RiArrowUpLine>
          ) : (
            <RiArrowDownLine color="red"></RiArrowDownLine>
          )}
        </Text>
      </HStack>
    </HStack>

    <HStack>
      <Text children="since last month" opacity={'0.6'}></Text>
    </HStack>
  </Box>
);


const Bar = ({title, value, profit})=>{
  return (
    <Box title='' px={['0','20']} py='4'>
   <Heading size='sm' children={title} mb='2'>
  <HStack w={'full'} alignItems='center'>

    <Text children={ profit ?'0%':`-${value}%` }/>

    <Progress w='full' value={profit ? value : 0} colorScheme='purple'/>
    <Text children={`${value>100? value:100}%`}></Text>
  </HStack>
   </Heading>
    </Box>
  )
}


const Dashboard = () => {
  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box boxSizing="border-box" py="16" px={['4', '0']}>
        <Text
          TextAlign={'center'}
          // justifyContent='center'
          opacity={0.5}
          children={`last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children="Dashboard"
          ml={['0', '16']}
          mb="16"
          textAlign={['center', 'left']}
        />

        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="views" qty={200} qtyPercentage={30} profit={true} />
          <Databox title="Users" qty={44} qtyPercentage={30} profit={true} />
          <Databox
            title="Subscription"
            qty={33}
            qtyPercentage={30}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius="lg"
          p={['0', '16']}
          mt={['4', '16']}
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        >
          <Heading
            textAlign={['center', 'left']}
            size="md"
            children="Views Graph"
            pt={['8', '0']}
            ml={['0', '16']}
          ></Heading>

          {/* line graph here */}
        <LineChart/>
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading textAlign={['center','left']}
             size='md'
             children='Progress Bar'
             my='8'
             ml={['0','16']}
            >

            </Heading>
            <Box>
          <Bar title='Views' value={20} profit={true} />
          <Bar title='Users' value={60} profit={false}  />
          <Bar title='Subscription' value={30} profit={true} />
          </Box>
          </Box>

           <Box p={['0','16']} boxSizing='border-box' py='4'>
            <Heading textAlign={'center'} size='md'
             mb={'4'}
             children='Users'
            >
              {/* dought graph */}
              <DoughnutChart/>
            </Heading>
           </Box >
       
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
