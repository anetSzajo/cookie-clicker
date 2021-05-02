import {UserProgressInterface} from './UserProgress.interface';
import {UserProgress} from "./UserProgress.model";

export class LocalStorageUserProgressService implements UserProgressInterface {
    _userProgress: UserProgress = this._loadUserProgressFromLocalStorage();

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
        this._userProgress.clickCounter = clickCounter;
        localStorage.setItem("userProgress", JSON.stringify(this._userProgress))
    }

    updateLevel(level: number): void {
        this._userProgress.level = level;
        localStorage.setItem("userProgress", JSON.stringify(this._userProgress));
    }
}