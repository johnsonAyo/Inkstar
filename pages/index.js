import { useMoralis } from "react-moralis";
import {
  Flex,
  Text,
  Button,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "./components/Header";

export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title> Login | Dashboard3</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal.400, purple.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Dashboard3
          </Text>
          <Button
            onClick={() =>
              authenticate({
                signingMessage: "sign to login to dashboard",
              })
            }
            colorScheme="purple"
            size="lg"
            mt="6"
          >
            Login With metamask
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="purple.100" px="44" py="20">
          <Tabs>
            <TabList>
              <Tab fontWeight="bold"> Profile</Tab>
              <Tab fontWeight="bold"> Balance</Tab>
              <Tab fontWeight="bold"> Transaction</Tab>
              <Tab fontWeight="bold"> NFTS</Tab>
              <Tab fontWeight="bold"> Send Eth</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Profile</TabPanel>
              <TabPanel>Balance</TabPanel>
              <TabPanel>Transaction</TabPanel>
              <TabPanel>NFTS</TabPanel>
              <TabPanel> Send Eth</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}
