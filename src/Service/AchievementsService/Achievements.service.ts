import {UserProgress} from "../UserProgress/UserProgress.model";
import {AchievementModel} from "./Achievement.model";

export class AchievementsService {
    achievements: AchievementModel[] = [];
    notifyFunction: Function = () => {
    };

    constructor() {
        this.achievements = this._createAchievementsList();
    }

    setNotifyFunction(onNewAchievement: Function): void {
        this.notifyFunction = onNewAchievement;
    }

    _createAchievementsList(): AchievementModel[] {
        let achievementsList: AchievementModel[] = [];

        achievementsList.push({
            name: "Intern",
            condition: (userProgress: UserProgress) => userProgress.clickCounter >= 20,
            isAchieved: false
        });
        achievementsList.push({
            name: "Junior",
            condition: (userProgress: UserProgress) => userProgress.clickCounter >= 40,
            isAchieved: false
        });
        achievementsList.push({
            name: "Regular",
            condition: (userProgress: UserProgress) => userProgress.clickCounter >= 60,
            isAchieved: false
        });
        achievementsList.push({
            name: "Senior",
            condition: (userProgress: UserProgress) => userProgress.clickCounter >= 100,
            isAchieved: false
        });
        achievementsList.push({
            name: "Master",
            condition: (userProgress: UserProgress) => userProgress.clickCounter >= 300,
            isAchieved: false
        });

        return achievementsList;
    }


    checkForNewAchievements(userProgress: UserProgress): void {
        this.achievements = this.achievements.map(achievement => {
            if (!achievement.isAchieved) {
                if (achievement.condition(userProgress)) {
                    achievement.isAchieved = true;
                    this.notifyFunction(achievement.name)
                }
            }
            return achievement;
        })
    }
}