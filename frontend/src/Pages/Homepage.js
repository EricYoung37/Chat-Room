import React, { useEffect } from "react";
import {
  Box,
  Center,
  Container,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) history.push("/chat");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Center
        display="flex"
        p={2}
        bg="white"
        w="100%"
        m="4rem 0 2rem 0"
        borderRadius="lg"
      >
        <Text fontSize="xl" fontFamily="Playwrite AU QLD">
          Chat Room
        </Text>
      </Center>

      <Box bg="white" w="100%" p={4} borderRadius="lg">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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
  );
};

export default Homepage;
