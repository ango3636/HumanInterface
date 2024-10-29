import { HStack, Text, Spacer } from "@chakra-ui/react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <IoCheckmarkDoneSharp size={70}></IoCheckmarkDoneSharp>
      <Text paddingRight="600px" fontSize="xxx-large">
        TaskMate
      </Text>

      <Text textAlign="right" fontSize="xx-large">
        Alexis Moradian
      </Text>
    </HStack>
  );
};

export default Navbar;
