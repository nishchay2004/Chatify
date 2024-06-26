import React from 'react'
import { useEffect } from 'react';
import { useHistory } from "react-router"

import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup"
import Login from "../components/Authentication/Login"

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) history.push("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);


  return (
    <Container maxW="xl" centerContent >
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#004777"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color="white"
      >
        <Text display="flex" textAlign="center" fontSize="4xl" fontFamily="Work sans">
          Chatify
        </Text>
      </Box>
      <Box bg="#004777" color="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="white">Login</Tab>
            <Tab color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>

  )
}

export default Home
