import CustomContainer from "./CustomContainer";
import {
  Text,
  NumberDecrementStepper,
  FormControl,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  NumberInput,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import Moralis from "moralis";
import { useState } from "react";
import { useWeb3Transfer } from "react-moralis";

const Send = () => {
  const [amount, setAmount] = useState(0);
  const handleChange = (value) => setAmount(value);
  const [receiver, setReceiver] = useState("");
  const toast = useToast();
  const { fetch, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: receiver,
    type: "native",
  });

  console.log(receiver);

  return (
    <CustomContainer>
      <Text fontSize="xl" fontWeight="bold">
        Send Eth
      </Text>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await Moralis.enableWeb3();
          fetch({
            onSuccess: () => {
              toast({
                title: "ETH successfully sent.",
                isClosable: true,
              });
              setReceiver("");
              setAmount(0);
            },
            onError: (error) => {
              toast({
                title: "Error.",
                description: error,
                status: "Error",
                duration: "9000",
                isClosable: true,
              });
            },
          });
        }}
      >
        <FormControl mt="4">
          <FormLabel htmlFor="amount">Amount of Eth</FormLabel>
          <NumberInput step={0.1} onChange={handleChange}>
            <NumberInputField id="amount" value={amount} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <FormLabel mt="4" htmlFor="receiver">
            Send To
          </FormLabel>
          <Input
            id="receiver"
            type="text"
            placeholder="Receiver Address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          ></Input>
        </FormControl>
        <Button mt="4" type="submit" colorScheme="purple" disabled={isFetching}>
          💰&nbsp;Send
        </Button>
      </form>
    </CustomContainer>
  );
};

export default Send;
