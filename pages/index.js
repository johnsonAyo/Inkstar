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
  Image,
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
            rel="stylesheet"
          />
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
          <Text
            fontSize={{ base: "3rem", md: "40px", lg: "56px" }}
            fontWeight="bold"
            color="white"
            fontFamily="Acme"
          >
            Welcome to Nexswap
          </Text>
          <Image
            width={{ base: "50%", md: "30%", lg: "20%" }}
            src="https://external-preview.redd.it/0dxvS5N95eJvb_gDDorFA_zEOv_QgXr6bBc0Ki5uEHc.jpg?auto=webp&s=e3bd64c30cbfdcab221d7f4920d3a1da1fe775b5"
          />
          <Text
        
            fontSize={{  base: "2rem", md: "3rem", lg: "3rem" }}
            margin={{ base: "2rem" }}
            fontWeight="light"
            color="black"
            fontFamily="Acme"
            textAlign="center"
          >
            A decentralised wallet to manage Erc20 tokens, Nfts and other cypto
            Assests
          </Text>
          <Button
            onClick={() =>
              authenticate({
                signingMessage: "sign to login to dashboard",
              })
            }
            size="lg"
            mt="6"
            fontFamily="Acme"
            color="blue.300"
          >
            connect your metamask to get started
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
        <Box flex="1" bg="purple.100">
          <Tabs size="100%" align="center" variant="enclosed">
            <TabList >
              <Tab marginRight="1rem" fontWeight="bold">Profile</Tab>
              <Tab  marginRight="1rem" fontWeight="bold"> Balance</Tab>
              <Tab  marginRight="1rem" fontWeight="bold"> Transaction</Tab>
              <Tab   marginRight="1rem" fontWeight="bold"> NFTS</Tab>
              <Tab  marginRight="1rem" fontWeight="bold"> Send Eth</Tab>
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
