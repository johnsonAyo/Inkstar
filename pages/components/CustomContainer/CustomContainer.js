import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children }) => {
  return (
    <Box
      bg="white"
      width={[340, 450, 700, 850, 1000]}
      mt={[5, 8, 10]}
      height="full"
      px={[10, 15, 20]}
      py="10"
      shadow="lg"
      textAlign="start"
      rounded="lg"
    >
      {children}
    </Box>
  );
};

export default CustomContainer;
