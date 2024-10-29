import {
  Button,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      title: "Primary Doctor",
      name: "Dr. Jeremy Vance",
      phone: "913-475-6048",
    },
    {
      id: 2,
      title: "Mother",
      name: "Annie Pruss",
      phone: "913-515-7279",
    },
    { id: 3, title: "Boss", name: "David Williamson", phone: "913-857-8975" },
    { id: 4, title: "Therapist", name: "Brooke Wesley", phone: "913-231-8868" },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Grid templateColumns="2fr 1fr" gap={3} padding={3}>
        <GridItem padding={3} width="100%" h="500" bg="cyan.100">
          <Heading paddingBottom={2} as="h2" size="xl">
            Contacts
          </Heading>
          <ContactList contacts={contacts} onCall={onOpen} />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Calling</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </GridItem>
        <GridItem width="100%" h="500" bg="white">
          <Heading as="h2" size="lg" padding={2}>
            Add New Contact
          </Heading>
          <ContactForm
            onSubmit={(newContact) =>
              setContacts([
                ...contacts,
                { ...newContact, id: contacts.length + 1 },
              ])
            }
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Contact;
