import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import CookieClicker from "../CookieClicker/CookieClicker";
import Dashboard from "../Dashboard/Dashboard";
import {DoubledLevelsGenerator} from "../../Service/LevelsGenerator/DoubledLevelsGenerator.service";

const levelsMap: Map<number, number> = new DoubledLevelsGenerator().create(10);

let userProgress: { level: number, counter: number };
try {
    let localStorageData: string | null = localStorage.getItem('userProgress');
    if (localStorageData) {
        userProgress = JSON.parse(localStorageData);
    }
} catch (e) {
    userProgress = {level: 1, counter: 0}
}

export default function Home() {
    const [counter, setCounter] = React.useState(userProgress.counter);
    const [level, setLevel] = React.useState(userProgress.level);
    const higherLevel: number | undefined = levelsMap.get(level + 1);


    if (higherLevel && counter >= higherLevel) {
        setLevel((preciousLevel) => {
            const nextLevel = preciousLevel + 1
            localStorage.setItem("userProgress", JSON.stringify({level: nextLevel, counter: counter}))
            return nextLevel
        });
    }

    const handleClickCookie = () => {
        setCounter((preciousCounter) => {
            const nextCounter = preciousCounter + 1
            localStorage.setItem("userProgress", JSON.stringify({level: level, counter: nextCounter}))
            return nextCounter
        });
    }


    const resetCounter = () => {
        localStorage.setItem("userProgress", JSON.stringify({level: 1, counter: 0}));
        setCounter(0);
        setLevel(1)
    }

    return (
        <Box d="flex" flexDirection="column" mt="5rem">
            <VStack spacing="20%">
                <Dashboard counter={counter} level={level} resetCounter={resetCounter}
                           isDisabled={counter == 0}/>
                <CookieClicker handleClickCookie={handleClickCookie}/>
            </VStack>
        </Box>
    )
}