import { Box } from "@chakra-ui/react";

const CustomContainer = ({ children }) => {
  return (
    <Box
      bg="white"
      width={[300, 400,700, 850, 1000]}
      mt="10"
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
