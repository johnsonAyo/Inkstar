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
import Header from "./components/Header";
import Profile from "./components/Profile";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import Nft from "./components/Nft";
import Send from "./components/Send";

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
          <Tabs
            size="lg"
       
            align="center"
            variant="enclosed"
          >
            <TabList>
              <Tab fontWeight="bold">Profile</Tab>
              <Tab fontWeight="bold"> Balance</Tab>
              <Tab fontWeight="bold"> Transaction</Tab>
              <Tab fontWeight="bold"> NFTS</Tab>
              <Tab fontWeight="bold"> Send Eth</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance user={user} />
              </TabPanel>
              <TabPanel>
                <Transaction user={user} />
              </TabPanel>
              <TabPanel>
                <Nft user={user} />
              </TabPanel>
              <TabPanel>
                <Send user={user} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}
