import React from 'react';
import {Box} from "@chakra-ui/react";


type ComponentProps = {
    name: string,
    isAchieved: boolean
}
export default function Achievement({name, isAchieved}: ComponentProps) {
    const background: string = isAchieved ? 'yellow.300' : 'gray.300';

    return (
        <Box bg={background} p="1rem" fontSize="lg" d="flex" alignItems="center" justifyContent="center" m="0.8rem"
             borderRadius="lg" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
            {name}
        </Box>
    )
}