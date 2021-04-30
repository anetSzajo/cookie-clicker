export interface LevelsGeneratorInterface {
    create(levelsLimit: number): Map<number, number>
}