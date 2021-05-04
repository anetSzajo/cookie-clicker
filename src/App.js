import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LocalStorageUserProgressService} from "./Service/UserProgress/LocalStorageUserProgress.service";
import {AchievementsService} from "./Service/AchievementsService/Achievements.service";
import Achievements from "./Components/Achievements/Achievements";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {Box, useToast} from "@chakra-ui/react";
import "./styles.css";

const localStorageUserProgressService = new LocalStorageUserProgressService();
export const UserProgressServiceContext = React.createContext(localStorageUserProgressService);


const achievementsService = new AchievementsService();
export const AchievementsServiceContext = React.createContext(achievementsService);


export default function App() {
    const toast = useToast();

    const onNewAchievement = (title) => {
        toast({
            title: "Achievement unlocked!",
            description: `${title}`,
            status: "success",
            duration: 5000,
            isClosable: true
        })
    }

    achievementsService.setNotifyFunction(onNewAchievement)


    return (
        <UserProgressServiceContext.Provider value={localStorageUserProgressService}>
            <AchievementsServiceContext.Provider value={achievementsService}>
                <Box d="flex" flexDirection="column" alignItems="center" h='100vh'>
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route exact path={["/", "/home"]} component={Home}/>
                            <Route path="/achievements" component={Achievements}/>
                            <Route path="/shop" component={Shop}/>
                        </Switch>
                    </Router>
                    <Footer/>
                </Box>
            </AchievementsServiceContext.Provider>
        </UserProgressServiceContext.Provider>
    );
}
