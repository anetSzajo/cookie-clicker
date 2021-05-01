import React from 'react';
import {Box, Heading, Spacer} from "@chakra-ui/react";
import NavbarLinks from "../NavbarLinks";
import {CookieIcon} from "../../../SharedComponents/CookieIcon";


export default function DesktopNavbar() {
    return (
        <Box d="flex" alignItems="center" h="100%" w="100%" p="8px">
            <Box d="flex" flexDirection="row" alignItems="center">
                <CookieIcon boxSize="2rem" mr="12px"/>
                <Heading size="s" color="white">Cookie Clicker</Heading>
            </Box>
            <Spacer/>
            <Box d="flex" alignItems="center" color="white">
                <NavbarLinks/>
            </Box>
        </Box>
    )
}