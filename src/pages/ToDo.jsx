import React from 'react'
import { List, ListItem, Heading } from "@chakra-ui/core"
import { AddTaskModal } from '../components/Tasks'

const ToDo = (props) => (
    <>
        <Heading as="h1" size="lg" p={3}>To Do:</Heading>
        <AddTaskModal handleCreate={props.handleCreate} />
        {props.todo.length !== 0 ? <List border="1px" borderRadius="md" borderColor="gray.900" p={1} bg="gray.800" my={2}>
            {props.todo.map(val => <ListItem>{val}</ListItem>)}
        </List> : null}
    </>
)

export default ToDo