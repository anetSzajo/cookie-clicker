import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {CookieIcon} from "../../../SharedComponents/CookieIcon";

type ComponentProps = {
    counter: number;
}

export default function Counter({counter}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <CookieIcon boxSize="2rem" mr="1rem"/>
            <Text id="counter" fontSize="4xl">{counter}</Text>
        </Box>
    )
}