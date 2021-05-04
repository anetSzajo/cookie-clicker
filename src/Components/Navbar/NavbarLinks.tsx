import React from "react";
import {HStack, Link} from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom";

export default function NavbarLinks() {
    return (
        <HStack spacing="24px" id="navbar--links___container">
            <Link as={ReactRouterLink} to="/home">
                HOME
            </Link>
            <Link as={ReactRouterLink} to="/achievements">
                ACHIEVEMENTS
            </Link>
            <Link as={ReactRouterLink} to="/shop">
                SHOP
            </Link>
        </HStack>
    )
}