import React, {useContext} from "react";
import {Box, Heading} from "@chakra-ui/react";
import {AchievementsGenerator} from "../../Service/AchievementsGenerator/AchievementsGenerator.service";
import {UserProgress} from "../../Service/UserProgress/UserProgress.model";
import Achievement from "./Achievement";
import {UserProgressServiceContext} from "../../App";


const achievementsMap: Map<string, Function> = new AchievementsGenerator().create();


export default function Achievements() {
    const localStorageUserProgressService = useContext(UserProgressServiceContext);
    const userProgress: UserProgress = localStorageUserProgressService.getUserProgress();

    const achievements = [];

    for (let [key, value] of achievementsMap.entries()) {
        achievements.push(<Achievement key={key} name={key} unlocked={value(userProgress)}/>)
    }

    return (
        <Box mt="6rem" w="60%" d="flex" flexDirection="column" alignItems="center" justifyContent="center"
             border="3px dashed tomato" p="1rem" borderRadius="lg" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
            <Heading as="h1" size="2xl" m="1rem">Achievements</Heading>
            <Box w="70%">
                <div>{achievements}</div>
            </Box>
        </Box>
    )
}