import React from "react";
import {Box, Text} from "@chakra-ui/react";

type ComponentProps = {
    level: number;
}

export default function Level({level}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <Text fontSize="4xl" mr="1rem">Level:</Text>
            <Text fontSize="4xl">{level}</Text>
        </Box>
    )
}