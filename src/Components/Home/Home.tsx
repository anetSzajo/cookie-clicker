import React, {useContext} from 'react';
import {Box, VStack} from "@chakra-ui/react";
import CookieClicker from "../CookieClicker/CookieClicker";
import Dashboard from "../Dashboard/Dashboard";
import {AchievementsServiceContext, UserProgressServiceContext} from '../../App';
import {UserProgress} from "../../Service/UserProgress/UserProgress.model";


export default function Home() {
    const localStorageUserProgressService = useContext(UserProgressServiceContext);
    const userProgress: UserProgress = localStorageUserProgressService.getUserProgress();
    const achievementsService = useContext(AchievementsServiceContext);

    const [counter, setCounter] = React.useState(userProgress.clickCounter);
    const [level, setLevel] = React.useState(userProgress.level);


    const handleClickCookie = () => {
        setCounter((previousCounter) => {
            const nextCounter = previousCounter + 1
            localStorageUserProgressService.updateClickCounter(nextCounter)
            setLevel(localStorageUserProgressService.getUserProgress().level)
            achievementsService.checkForNewAchievements(localStorageUserProgressService.getUserProgress())
            return nextCounter
        });
    }


    const resetCounter = () => {
        const resetUserProgress = localStorageUserProgressService.resetUserProgress();
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