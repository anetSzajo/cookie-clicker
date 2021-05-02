import React from "react";
import {Box, Spacer} from "@chakra-ui/react";
import Counter from "./Counter/Counter";
import Level from "./Level/Level";
import ResetCounter from "./ResetCounter/ResetCounter";

type ComponentProps = {
    counter: number,
    level: number,
    resetCounter: Function,
    isDisabled: boolean,
}

export default function Dashboard({counter, level, resetCounter, isDisabled}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" borderRadius="lg" border="3px dashed tomato" p="1rem" h="10rem" w="100%" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
                <Counter counter={counter}/>
                <ResetCounter resetCounter={()=>resetCounter()} isDisabled={isDisabled}/>
                <Spacer />
                <Level level={level} />
        </Box>
    )
}