import {UserProgress} from "./UserProgress.model";

export interface UserProgressInterface {
    getUserProgress(): UserProgress,
    updateClickCounter(clickCounter: number): void,
    resetUserProgress(): UserProgress
}