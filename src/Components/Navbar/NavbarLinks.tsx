import {HStack, Link} from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom";
import React from "react";

export default function NavbarLinks() {
    return (
        <HStack spacing="24px">
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