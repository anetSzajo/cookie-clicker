import React from "react";
import {IconButton} from "@chakra-ui/react";
import {CookieIcon} from "../../SharedComponents/CookieIcon";

type ComponentProps = {
    handleClickCookie: Function;
}

export default function CookieClicker({handleClickCookie}: ComponentProps) {
    return (
        <IconButton id="cookieButton" aria-label="cookie icon" icon={<CookieIcon height="100%" width="100%"/>} onClick={() => handleClickCookie()}
                    width="17rem" height="17rem" background="transparent" transition="transform .2s"
                    _hover={{background: "transparent", transform: "scale(1.2)" }}
                    _active={{background: "transparent", transform: "rotate(0.5turn)" }}
                    _focus={{background: "transparent"}}/>
    )
}