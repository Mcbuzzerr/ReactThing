import React from 'react'
import { List, ListItem, ListIcon } from "@chakra-ui/core"

const ToDo = (props) => (
    <>
        <h1>To Do:</h1>
        <List spacing={3}>
            <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
                {/* You can also use custom icons from react-icons */}
            <ListItem>
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
        </List>
    </>
)

export default ToDo