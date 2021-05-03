import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Achievements from "./Components/Achievements/Achievements";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import "./styles.css";
import Footer from "./Components/Footer/Footer";
import {Box} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {LocalStorageUserProgressService} from "./Service/UserProgress/LocalStorageUserProgress.service";

const localStorageUserProgressService = new LocalStorageUserProgressService();
export const UserProgressServiceContext = React.createContext(localStorageUserProgressService);

export default function App() {
    return (
        <UserProgressServiceContext.Provider value={localStorageUserProgressService}>
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
        </UserProgressServiceContext.Provider>
    );
}
