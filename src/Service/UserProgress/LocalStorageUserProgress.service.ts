import {UserProgressInterface} from './UserProgress.interface';
import {UserProgress} from "./UserProgress.model";
import {DoubledLevelsGenerator} from "../LevelsGenerator/DoubledLevelsGenerator.service";

export class LocalStorageUserProgressService implements UserProgressInterface {
    _userProgress: UserProgress = this._loadUserProgressFromLocalStorage();
    _levelsMap: Map<number, number> = new DoubledLevelsGenerator().create(10);

    _loadUserProgressFromLocalStorage(): UserProgress {
        try {
            let localStorageData: string | null = localStorage.getItem('userProgress');
            if (localStorageData === null) {
                return {level: 1, clickCounter: 0}
            } else {
                return JSON.parse(localStorageData);
            }
        } catch (e) {
            return {level: 1, clickCounter: 0}
        }
    }


    _getProperLevel(clickCounter: number): number {
        let properLevel: number = this._userProgress.level;

        for (let [key, value] of this._levelsMap.entries()) {
            if (clickCounter > value) {
                continue
            } else if (clickCounter == value) {
                properLevel = key;
                break;
            } else {
                properLevel = key - 1;
                break;
            }
        }
        return properLevel;
    }

    getUserProgress(): UserProgress {
        return this._userProgress;
    }

    resetUserProgress(): UserProgress {
        this._userProgress.clickCounter = 0;
        this._userProgress.level = 1;
        localStorage.setItem("userProgress", JSON.stringify(this._userProgress));
        return this._userProgress;
    }


    updateClickCounter(clickCounter: number): void {
        this._userProgress.level = this._getProperLevel(clickCounter);
        this._userProgress.clickCounter = clickCounter;
        localStorage.setItem("userProgress", JSON.stringify(this._userProgress))
    }

    registerShopItem(step: number, seconds: number): void {
        setInterval(() => {
            this.updateClickCounter(this._userProgress.clickCounter + step);
        }, seconds * 1000)
    }
}