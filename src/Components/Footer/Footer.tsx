import React from "react";
import {Box} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" w="100vw" position="fixed" bottom="0" bg="tomato">
            <p>&copy; Aneta Szajowska</p>
        </Box>
    )
}