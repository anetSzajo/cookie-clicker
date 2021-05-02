import {LevelsGeneratorInterface} from "./LevelsGenerator.interface";

export class DoubledLevelsGenerator implements LevelsGeneratorInterface {
    create(levelsLimit: number): Map<number, number> {
        if (levelsLimit < 3) {
            throw new Error("Level limit should be 3 at least. Please use correct level limit.");
        }

        let levelsMap = new Map();
        levelsMap.set(1, 0)
        levelsMap.set(2, 10)

        for (let i = 3; i <= levelsLimit; i++) {
            levelsMap.set(i, levelsMap.get(i - 1) * 2);
        }

        return levelsMap;
    }
}