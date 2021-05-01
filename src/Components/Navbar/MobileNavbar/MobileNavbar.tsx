import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Heading,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons';
import NavbarLinks from "../NavbarLinks";
import {CookieIcon} from "../../../SharedComponents/CookieIcon";

export default function MobileNavbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <IconButton aria-label="Open menu" icon={<HamburgerIcon/>} onClick={onOpen} size="md" colorScheme="white"
                        p="5px" borderColor="white" border="2px solid"/>
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent color="white" background="#FF6346">
                        <DrawerHeader borderBottomWidth="1px" h="100%" d="flex" flexDirection="row" alignItems="center"
                                      justifyContent="center">
                            <CookieIcon boxSize="40px" mr="12px"/>
                            <Heading size="s" color="white">Cookie Clicker</Heading>
                        </DrawerHeader>
                        <DrawerBody d="flex" flexDirection="column" alignItems="center" justify="content">
                            <NavbarLinks/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}