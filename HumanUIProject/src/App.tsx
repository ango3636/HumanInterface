import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"`}
      gridTemplateRows={"100px 1fr 10px"}
      gridTemplateColumns={"200px 1fr"}
      h="685px"
      padding="3"
      gap="3"
      color="blackAlpha"
      fontWeight="bold"
    >
      <GridItem shadow="lg" pl="2" area={"header"} bg="cyan.100">
        <NavBar />
      </GridItem>
      <GridItem shadow="lg" pl="2" area={"nav"} bg="cyan.600">
        <Text>Aside</Text>
      </GridItem>
      <GridItem shadow="lg" pl="2" bg="blackAlpha.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
