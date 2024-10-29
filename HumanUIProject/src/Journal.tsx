import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Journal = () => {
  return (
    <Box margin={2} h="550px" bg="gray.100">
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(3, 1fr)">
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
        <GridItem>
          <Textarea
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={425}
            height="125px"
            margin={3}
            placeholder="type here"
          ></Textarea>
          <Box textAlign="right">
            <Button size="sm" marginRight={10} bg="cyan.600">
              Save
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Journal;
