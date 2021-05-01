import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import CookieClicker from "../CookieClicker/CookieClicker";
import Dashboard from "../Dashboard/Dashboard";
import {DoubledLevelsGenerator} from "../../Service/DoubledLevelsGenerator.service";

const levelsMap: Map<number, number> = new DoubledLevelsGenerator().create(10);

export default function Home() {
    const [counter, setCounter] = React.useState(0);
    const [level, setLevel] = React.useState(1);
    const higherLevel: number | undefined = levelsMap.get(level + 1);

    if (higherLevel && counter >= higherLevel) {
        setLevel(level + 1)
    }

    const handleClickCookie = () => {
        setCounter(counter + 1);
    }


    return (
        <Box d="flex" flexDirection="column" mt="5rem">
            <VStack spacing="20%">
                <Dashboard counter={counter} level={level}/>
                <CookieClicker handleClickCookie={handleClickCookie}/>
            </VStack>
        </Box>
    )
}