import { Box, Center, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../redux/actions/admin';
import Sidebar from '../Sidebar';
import { LineChart ,DoughnutChart } from './Chart';
import Loader from "../../Layout/Loader/Loader"

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    p="8"
    boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
    borderRadius={'lg'}
  >
    <text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>{qty}</Text>
      <HStack>
        <Text children={`${qtyPercentage}%`}/>
        
          {profit ? (
            <RiArrowUpLine color="green"></RiArrowUpLine>
          ) : (
            <RiArrowDownLine color="red"></RiArrowDownLine>
          )}
    
      </HStack>
    </HStack>

    <HStack>
      <Text children="since last month" opacity={'0.6'}></Text>
    </HStack>
  </Box>
);


const Bar = ({title, value, profit})=>{

  console.log(title,value,profit)
  return (
    <Box  px={['0','20']} py='4'>
   <Heading size='sm' children={title} mb='2'/>
  <HStack w={'full'} alignItems='center'>

    <Text children={ profit ?'0%':`-${value}%` }/>

    <Progress w='full' value={profit ? value : 0} colorScheme='purple'/>
    <Text children={`${value>100? value:100}%`}></Text>
  </HStack>
  
    </Box>
  )
}


const Dashboard = () => {
  
const dispatch = useDispatch()


const {

  loading,
  stats,
viewsCount,
SubscriptionCount,
usersCount,
usersPercentage,
subscriptionPercentage,
viewsPercentage,
usersProfit,
subscriptionProfit,
viewsProfit
} = useSelector(state=>state.admin)

useEffect(()=>{
  dispatch(getDashboardStats())
},[dispatch])


  return (
    <Grid
      minH={'100vh'}
      templateColumnsurl
      css={{ cursor: `url(), default` }}
      templateColumns={['1fr', '5fr 1fr']}
    >
      {loading || !stats ?(<Loader></Loader>):(
        <>
        <Box boxSizing="border-box" py="16" px={['4', '0']}>
          <Center>
          <Text
          TextAlign={'center'}
          // justifyContent='center'
          opacity={0.5}
          children={`last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]}`}
        />
          </Center>
       
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
          <Databox title="views" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
          <Databox title="Users" qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit}/>
          <Databox
            title="Subscription"
            qty={SubscriptionCount}
            qtyPercentage={subscriptionPercentage}
            profit={subscriptionProfit}
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
        <LineChart  views={stats.map((item)=>(item.views))}/>
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
          <Bar title={'Views'} value={viewsPercentage} profit={viewsProfit} />
          <Bar title={'Users'} value={usersPercentage} profit={usersProfit}  />
          <Bar title={'Subscription'} value={subscriptionPercentage} profit={subscriptionProfit} />
          </Box>
          </Box>

           <Box p={['0','16']} boxSizing='border-box' py='4'>
            <Heading textAlign={'center'} size='md'
             mb={'4'}
             children='Users'
            >
              {/* dought graph */}
              <DoughnutChart users={[SubscriptionCount ,usersCount-SubscriptionCount]}/>
            </Heading>
           </Box >
       
        </Grid>
      </Box>
        </>
      )}
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
