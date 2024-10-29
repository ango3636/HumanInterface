import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";

const App = () => {
  return (
    <GridItem area="main">
      <Box>
        <Heading as="h1" size="3xl" paddingBottom={5}>
          Welcome Back
        </Heading>
      </Box>
    </GridItem>
  );
};

export default App;
