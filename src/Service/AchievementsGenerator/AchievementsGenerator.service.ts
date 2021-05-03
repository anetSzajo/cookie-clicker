import {UserProgress} from "../UserProgress/UserProgress.model";

export class AchievementsGenerator {
    create(): Map<string, Function> {
        let achievementsMap = new Map();
        achievementsMap.set("Intern", (userProgress: UserProgress) => userProgress.clickCounter >= 100);
        achievementsMap.set("Junior", (userProgress: UserProgress) => userProgress.clickCounter >= 200);
        achievementsMap.set("Regular", (userProgress: UserProgress) => userProgress.clickCounter >= 300);
        achievementsMap.set("Senior", (userProgress: UserProgress) => userProgress.clickCounter >= 400);
        achievementsMap.set("Master", (userProgress: UserProgress) => userProgress.clickCounter >= 500);

        return achievementsMap;
    }
}