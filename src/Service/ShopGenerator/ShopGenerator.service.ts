import {ShopItemModel} from "./ShopItem.model";

export class ShopGenerator {
    create(): Array<ShopItemModel> {
        return [
            {
                name: "Turtle",
                description: "Click on cookie every 10 sec.",
                levelNeeded: 3,
                cookieCost: 40,
                isActive: false
            },
            {
                name: "Rabbit",
                description: "Click on cookie every 6 sec.",
                levelNeeded: 6,
                cookieCost: 100,
                isActive: false
            },
            {
                name: "Jaguar",
                description: "Click on cookie every 2 sec.",
                levelNeeded: 8,
                cookieCost: 250,
                isActive: false
            }
        ];
    }
}