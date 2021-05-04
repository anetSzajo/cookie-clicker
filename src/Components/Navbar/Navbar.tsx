import React from 'react';
import {Box, useMediaQuery} from "@chakra-ui/react";
import {createBreakpoints} from "@chakra-ui/theme-tools";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import DesktopNavbar from "./DesktopNavbar/DesktopNavbar";


const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
})

export default function Navbar() {
    const [isDeviceDesktop] = useMediaQuery(`(min-width: ${breakpoints.md})`)

    return (
        <Box id="navbar" d="flex" alignItems="center" h="50px" w="100%" bg="tomato" position="fixed" top="0" p="4px">
            {isDeviceDesktop
                ?
                <DesktopNavbar/>
                :
                <MobileNavbar/>
            }
        </Box>
    )
}