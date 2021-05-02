import React from 'react';
import {Box, VStack} from "@chakra-ui/react";
import CookieClicker from "../CookieClicker/CookieClicker";
import Dashboard from "../Dashboard/Dashboard";
import {DoubledLevelsGenerator} from "../../Service/LevelsGenerator/DoubledLevelsGenerator.service";
import {UserProgressServiceService} from "../../Service/UserProgress/UserProgressService.service";
import {UserProgress} from "../../Service/UserProgress/UserProgress.model";

const levelsMap: Map<number, number> = new DoubledLevelsGenerator().create(10);
const userProgressService = new UserProgressServiceService();
const userProgress: UserProgress = userProgressService.getUserProgress();

export default function Home() {
    const [counter, setCounter] = React.useState(userProgress.clickCounter);
    const [level, setLevel] = React.useState(userProgress.level);
    const higherLevel: number | undefined = levelsMap.get(level + 1);


    if (higherLevel && counter >= higherLevel) {
        setLevel((previousLevel) => {
            const nextLevel = previousLevel + 1
            userProgressService.updateLevel(nextLevel)
            return nextLevel
        });
    }

    const handleClickCookie = () => {
        setCounter((previousCounter) => {
            const nextCounter = previousCounter + 1
            userProgressService.updateClickCounter(nextCounter)
            return nextCounter
        });
    }


    const resetCounter = () => {
        const resetUserProgress = userProgressService.resetUserProgress();
        setCounter(resetUserProgress.clickCounter);
        setLevel(resetUserProgress.level)
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