import React from "react";
import {Box, Spacer} from "@chakra-ui/react";
import Counter from "./Counter/Counter";
import Level from "./Level/Level";

export default function Dashboard() {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" borderRadius="lg" border="3px dashed tomato" p="1rem" h="10rem" w="100%" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
                <Counter counter={200}/>
                <Spacer />
                <Level level={13} />
        </Box>
    )
}