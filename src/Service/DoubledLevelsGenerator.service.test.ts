import {DoubledLevelsGenerator} from "./DoubledLevelsGenerator.service";

describe("create levels map", () => {
    it("should throw error when level limit lower than 3", () => {

        expect(() => new DoubledLevelsGenerator().create(0)).toThrowError(
            new Error('Level limit should be 3 at least. Please use correct level limit.')
        )
    })
    it("Should render 3 levels map", () => {
        const mapTemplate = new Map([[1, 0], [2, 10], [3, 20]]);
        const levelsMap = new DoubledLevelsGenerator().create(3)
        expect(mapTemplate).toEqual(levelsMap)
    })
    it("Should render levels map correctly", () => {

        const mapTemplate = new Map([[1, 0], [2, 10], [3, 20], [4, 40], [5, 80], [6, 160], [7, 320], [8, 640], [9, 1280], [10, 2560]]);
        const levelsMap = new DoubledLevelsGenerator().create(10)

        expect(mapTemplate).toEqual(levelsMap)
    })
})

