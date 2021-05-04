import React, {useContext} from 'react';
import {Button, Text, HStack, VStack} from "@chakra-ui/react";
import {ShopItemModel} from "../../Service/ShopGenerator/ShopItem.model";
import {CookieIcon} from "../../SharedComponents/CookieIcon";
import {UserProgressServiceContext} from "../../App";
import {UserProgress} from "../../Service/UserProgress/UserProgress.model";


export default function ShopItem({name, description, cookieCost, levelNeeded}: ShopItemModel) {
    const localStorageUserProgressService = useContext(UserProgressServiceContext);
    const userProgress: UserProgress = localStorageUserProgressService.getUserProgress();
    const [isBought, setIsBought] = React.useState(false);
    const [isEligibleToBuy, setIsEligibleToBuy] = React.useState(userProgress.level >= levelNeeded && userProgress.clickCounter >= cookieCost && !isBought);
    const background: string = isEligibleToBuy ? 'yellow.300' : (isBought ? 'green' : 'gray.300');

    const handleShopItemClick = () => {
        localStorageUserProgressService.updateClickCounter(userProgress.clickCounter - cookieCost);
        setIsEligibleToBuy(false);
        setIsBought(true);
        localStorageUserProgressService.registerShopItem(3, 1);
    }

    return (
        <Button bg={background} _hover={{background: "yellow.400"}} w="100%" h="30%" p="1rem" fontSize="lg" mb="0.8rem"
                borderRadius="lg" boxShadow="4px 9px 15px 0 rgb(0 0 0 / 12%)" onClick={() => handleShopItemClick()}
                isDisabled={!isEligibleToBuy}>
            <VStack spacing="4%">
                <Text fontSize="xl">{name}</Text>
                <Text fontSize="md">{description}</Text>
                <HStack>
                    <Text fontSize="md">Required:</Text>
                    <Text fontSize="sm">Level {levelNeeded}</Text>
                    <Text fontSize="sm"><CookieIcon boxSize="20px" mr="8px"/>{cookieCost}</Text>
                </HStack>
            </VStack>
        </Button>
    )
}