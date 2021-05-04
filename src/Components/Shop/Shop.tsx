import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import {ShopItemModel} from "../../Service/ShopGenerator/ShopItem.model";
import {ShopGenerator} from "../../Service/ShopGenerator/ShopGenerator.service";
import ShopItem from './ShopItem';

const shopItems: Array<ShopItemModel> = new ShopGenerator().create();

export default function Shop() {
    return (
        <Box m="4.5rem auto" w={{sm: "80%", md: "60%"}} h="100%" d="flex" flexDirection="column" alignItems="center"
             justifyContent="center"
             border="3px dashed tomato" p="1.5rem" borderRadius="lg" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)">
            <Heading as="h1" size="2xl">Shop</Heading>
            <Heading as="h2" size="md" m="1rem" textAlign="center">Click to buy machines</Heading>
            <Box w="100%">
                {shopItems.map((shopItem: ShopItemModel) => {
                    return <ShopItem key={shopItem.name} {...shopItem} />
                })}
            </Box>
        </Box>
    )
}