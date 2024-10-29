import {
  Grid,
  GridItem,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

const daysInMonth = 35; // Set the number of days in the month

const Calendar = () => {
  const daysArray = Array.from({ length: daysInMonth });

  return (
    <Box margin={2} h="570px" bg="gray.100">
      <Heading as="h2" size="2xl" padding={2} color="cyan.600">
        May 2024
      </Heading>

      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(1fr, 2fr, 2fr,2fr,2fr)"
        gap={3}
        margin={3}
      >
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Sunday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Monday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Tuesday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Wednesday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Thursday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Friday{" "}
          </Heading>
        </GridItem>
        <GridItem w="100%" h="5" bg="gray.100">
          <Heading fontSize="lg" color="black" textAlign="center">
            {" "}
            Saturday{" "}
          </Heading>
        </GridItem>
        <GridItem bg="gray.100" />
        <GridItem bg="gray.100" />
        <GridItem bg="gray.100" />
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>1</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>1</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>2</Text>
            <Text padding={1}>Dinner 5:00</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>3</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>4</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>5</Text>
            <Text padding={1}>Meeting 8:30</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>6</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>7</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>8</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>9</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>10</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>11</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>12</Text>
            <Text padding={1}>Meeting 8:30</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>13</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>14</Text>
            <Text padding={1}>Dr Appt 1:00</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>15</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>16</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>17</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>18</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>19</Text>
            <Text padding={1}>Meeting 8:30</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>21</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>22</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>23</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>24</Text>
            <Text padding={1}>Flight 3:30</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>25</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>26</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <VStack align="left">
            <Text padding={1}>27</Text>
            <Text padding={1}>Meeting 8:30</Text>
          </VStack>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>28</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>29</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>30</Text>
        </GridItem>
        <GridItem
          borderWidth="2px"
          borderColor="cyan.600"
          borderStyle="solid"
          w="100%"
          h="20"
          bg="white"
        >
          <Text padding={1}>31</Text>
        </GridItem>
        <GridItem bg="gray.100" />
      </Grid>
    </Box>
  );
};

export default Calendar;
