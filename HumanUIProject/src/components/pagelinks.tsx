import { HStack, Heading, Icon, Link, List, ListItem } from "@chakra-ui/react";
import { BsLaptop, BsPerson } from "react-icons/bs";
import {
  IoCheckboxOutline,
  IoCalendarOutline,
  IoSettingsSharp,
} from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";

const PageLinks = () => {
  return (
    <>
      <List paddingLeft="5px">
        <ListItem>
          <HStack padding={2}>
            <Icon as={IoCheckboxOutline} boxSize="30px" />
            <Link href="/todo" fontSize="x-large">
              To Do
            </Link>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack padding={2}>
            <Icon as={IoCalendarOutline} boxSize="30px" />
            <Link href="/calendar/" fontSize="x-large">
              Calendar
            </Link>
          </HStack>
        </ListItem>

        <ListItem>
          <HStack padding={2}>
            <Icon as={MdFormatListBulleted} boxSize="30px" />
            <Link href="/journal/" fontSize="x-large">
              Journal
            </Link>
          </HStack>
        </ListItem>

        <ListItem>
          <HStack padding={2}>
            <Icon as={BsPerson} boxSize="30px" />
            <Link href="/contacts/" fontSize="x-large">
              Contacts
            </Link>
          </HStack>
        </ListItem>

        <ListItem>
          <HStack padding={2}>
            <Icon as={IoSettingsSharp} boxSize="30px" />
            <Link href="/settings/" fontSize="x-large">
              Settings
            </Link>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default PageLinks;
