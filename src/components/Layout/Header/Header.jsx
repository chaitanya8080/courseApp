import React from 'react';
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';

import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';


const LinkButton = ({ url = '/', title='Home',onClose}) => (
  <Link onClick={onClose} to={url}>
    <Button varient={'ghost'}>{title}</Button>
  </Link>
);
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
const user = {
  role:'admin'
}

const logoutHandler = ()=>{
   console.log("logout")
   onClose()
}
  return (
    <>
      <ColorModeSwitcher />
      <Button
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        zIndex={'overlay'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
        onClick={onOpen}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBlockStartWidth={'1px'}>
            Course Bundler
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'5'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton  onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request Course" />
              <LinkButton  onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton  onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'}
                         onClick={logoutHandler}
                        
                        >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
{
  user && user.role ==="admin" && <Link onClick={onClose}  to='/admin/dashboard'>
    <Button colorScheme={'purple'} varient={"ghost"}>
      <RiDashboardFill style={{margin:"4px"}}/>
      Dashboard</Button>
  </Link>
}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose}  to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose}  to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
