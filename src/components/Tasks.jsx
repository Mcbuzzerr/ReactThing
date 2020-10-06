import React from 'react'
import { List, ListItem, IconButton, Flex } from "@chakra-ui/core"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/core";

const AddTaskModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const formSubmit = e => {
        e.preventDefault()
        props.handleCreate(document.getElementById("task").value)
        onClose()
    }

  return (
    <>
      <Button onClick={onOpen} border="1px" borderRadius="md" borderColor="gray.900" p={2} bg="gray.800">Add Task</Button>

      <Modal isOpen={isOpen} onClose={onClose} border="1px" borderRadius="md" borderColor="gray.900" p={2} bg="gray.800">
        <ModalOverlay />
        <ModalContent border="1px" borderRadius="md" borderColor="gray.900" p={2} bg="gray.800">
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formSubmit}>
            <ModalBody>
                <FormControl>
                    <FormLabel htmlFor="task">Task</FormLabel>
                    <Input type="task" id="task" aria-describedby="task-helper-text" color="black"/>
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button variant="ghost" variantColor="red" onClick={onClose}>Close</Button>
                <Button variantColor="blue" ml={3} type="submit">
                Add
                </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}


const TasksList = props => (
    <>
      {props.todo.length !== 0 ? <List minW="15vw" mt={1}>
        {props.todo.map((val, i) => <ListItem border="1px" borderRadius="md" borderColor="gray.900" p={1} bg="gray.800" my={2}>
          <Flex justify="space-between">
              {"handleArchive" in props ?
                <span>
                  <IconButton
                    variantColor="green"
                    icon="check"
                    onClick={() => props.handleArchive(val, i)}
                  />
                  </span>
              : null}
              <span>
                {val}
              </span>
              <span>
                <IconButton
                  variantColor="red"
                  icon="delete"
                  onClick={() => props.handleDelete(i)}
                />
              </span>
          </Flex>
        </ListItem>)}
      </List> : null}
    </>
  )

export { AddTaskModal }
export { TasksList }