import React, {useContext} from "react";
import {Box, Heading} from "@chakra-ui/react";
import Achievement from "./Achievement";
import {AchievementsServiceContext} from "../../App";
import {AchievementModel} from "../../Service/AchievementsService/Achievement.model";


export default function Achievements() {
    const achievementsService = useContext(AchievementsServiceContext);
    const achievements: AchievementModel[] = achievementsService.achievements;


    return (
        <Box mt="4.5rem" w={{sm: "80%", md: "60%"}} d="flex" flexDirection="column" alignItems="center"
             justifyContent="center"
             border="3px dashed tomato" p="1.5rem" borderRadius="lg" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
            <Heading as="h1" size="2xl">Achievements</Heading>
            <Heading as="h2" size="md" m="1rem" textAlign="center">Your unlocked achievements</Heading>
            <Box w="100%">
                {achievements.map(achievement => {
                    return <Achievement key={achievement.name} name={achievement.name}
                                        isAchieved={achievement.isAchieved}/>
                })}
            </Box>
        </Box>
    )
}