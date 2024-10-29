import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import React, { useState } from "react";

const Todo = () => {
  interface todoItem {
    text: string;
    isCompleted: boolean;
  }

  //state hooks

  const [toDo, setToDos] = useState<todoItem[]>([]);
  const [newTodo, setNewTodo] = useState<todoItem>({
    text: " ",
    isCompleted: false,
  });

  //functions
  const addTodo = () => {
    setToDos([...toDo, { text: newTodo.text, isCompleted: false }]);
    setNewTodo({ text: "Add Todo", isCompleted: false });
  };

  const handleBoxClick = (index: number) => {
    console.log("box checked", index);

    setToDos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({ ...newTodo, text: event.target.value });
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" width="99%" paddingY={2}>
      <GridItem bg="gray.200" padding={3} h="520px">
        <Heading as="h2" size="2xl" padding={2}>
          To Do
        </Heading>

        <HStack>
          <Input
            type="text"
            value={newTodo.text}
            onChange={(e) => handleInput(e)}
            variant="outline"
            borderColor="cyan.600"
            borderWidth="2px"
            width={800}
            placeholder={newTodo.text}
          />{" "}
          <Button bg="cyan.600" onClick={addTodo}>
            {" "}
            Add Todo
          </Button>
        </HStack>

        <List paddingY={2} paddingX={1} fontSize={"x-large"}>
          {toDo.map((todo, index) => (
            <ListItem>
              <IconButton
                size="x-large"
                variant="flushed"
                icon={
                  todo.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                onClick={() => handleBoxClick(index)}
                aria-label="checkoff"
              />
              {todo.text}
            </ListItem>
          ))}
        </List>
      </GridItem>
    </Grid>
  );
};

export default Todo;
