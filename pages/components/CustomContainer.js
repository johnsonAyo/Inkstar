import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children }) => {
  return (
    <Box
      bg="white"
      width="full"
      height="full"
      py="10"
      px="20"
      shadow="lg"
      textAlign="start"
      rounded="lg"
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
