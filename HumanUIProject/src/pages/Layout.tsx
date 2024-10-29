import {
  Box,
  ColorModeContext,
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageLinks from "../components/pagelinks";

const Layout = () => {
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
        <PageLinks />
      </GridItem>
      <GridItem shadow="lg" pl="2" bg="black" area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
