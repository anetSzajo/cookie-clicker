import {UserProgressInterface} from "./UserProgress.interface";
import {UserProgress} from "./UserProgress.model";


export class ApiUserProgressService implements UserProgressInterface {
    getUserProgress(): UserProgress {
        throw Error("Method not implemented");
    }

    resetUserProgress(): UserProgress {
        throw Error("Method not implemented");
    }

    updateClickCounter(clickCounter: number): void {
        const host: string = '';
        const url: string = `${host}/api/v1/progress`;

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                click_count: clickCounter
                }
            ),
            headers: {
                "Content - type": "application / json; charset = UTF - 8"
            }
        })
            .then(res => res.json())
            .catch(e => alert(e))
    }

    updateLevel(level: number): void {
        throw Error("Method not implemented");
    }

}