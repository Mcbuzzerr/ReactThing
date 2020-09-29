import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from "@chakra-ui/core"
import { Box } from "@chakra-ui/core"

const Nav = () => {
    return (<>
    <Flex as="header" direction="row" justify="space-between" bg="gray.900" p={4}>
        <nav>
            <Box as="span" p={2}><Link to="/">To Do</Link></Box>
            <Box as="span" p={2}><Link to="/archive">Archive</Link></Box>
        </nav>
        <span>My ToDo App</span>
    </Flex>
    </>)
}

export default Nav