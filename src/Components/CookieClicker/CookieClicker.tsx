import React from "react";
import {IconButton} from "@chakra-ui/react";
import {CookieIcon} from "../../SharedComponents/CookieIcon";

type ComponentProps = {
    handleClickCookie: Function;
}

export default function CookieClicker({handleClickCookie}: ComponentProps) {
    return (
        <IconButton aria-label="cookie icon" icon={<CookieIcon height="100%" width="100%"/>} onClick={() => handleClickCookie()}
                    width="17rem" height="17rem" background="transparent"
                    _hover={{background: "transparent"}}
                    _active={{background: "transparent"}}
                    _focus={{background: "transparent"}}/>
    )
}