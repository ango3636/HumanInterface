import { Box, Button, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import React from "react";

interface Contact {
  id: number;
  title: string;
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onCall: (id: number) => void;
}

const ContactList = ({ contacts, onCall }: Props) => {
  return (
    <Box margin="10px" padding={3} h="500">
      <Table
        size="sm"
        bg="cyan.100"
        variant="simple"
        border={2}
        borderColor="black"
      >
        <Tr>
          <Th>Title</Th>
          <Th>Name</Th>
          <Th>Phone</Th>
        </Tr>
        <Tbody>
          {contacts.map((contact) => (
            <Tr key={contact.id}>
              <Td>{contact.title}</Td>
              <Td>{contact.name}</Td>
              <Td>{contact.phone}</Td>
              <Td>
                {" "}
                <Button onClick={() => onCall(contact.id)}> call </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ContactList;
