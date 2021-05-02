import {UserProgress} from "./UserProgress.model";

export interface UserProgressInterface {
    getUserProgress(): UserProgress;
    updateLevel(level: number): void;
    updateClickCounter(clickCounter: number): void,
    resetUserProgress(): UserProgress
}