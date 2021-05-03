import {LocalStorageUserProgressService} from "./LocalStorageUserProgress.service";

describe("user progress in localStorage", () => {
    beforeEach(() => {
        localStorage.clear();
    })
    it("should get user progress when localStorage empty", () => {
        const localStorageUserProgressService = new LocalStorageUserProgressService();
        expect(localStorageUserProgressService.getUserProgress()).toStrictEqual({level: 1, clickCounter: 0})
    })
    it("should get user progress from localStorage", () => {
        localStorage.setItem("userProgress", JSON.stringify({level: 6, clickCounter: 9}))
        const localStorageUserProgressService = new LocalStorageUserProgressService();
        expect(localStorageUserProgressService.getUserProgress()).toStrictEqual({level: 6, clickCounter: 9})
    })
    it("should reset user progress", () => {
        const localStorageUserProgressService = new LocalStorageUserProgressService();
        localStorageUserProgressService.updateClickCounter(40)
        expect(localStorageUserProgressService.getUserProgress()).toStrictEqual({level: 4, clickCounter: 40})
        localStorageUserProgressService.resetUserProgress();
        expect(localStorageUserProgressService.getUserProgress()).toStrictEqual({level: 1, clickCounter: 0})
    })
    it("should update counter and level", () => {
        const localStorageUserProgressService = new LocalStorageUserProgressService();
        localStorageUserProgressService.updateClickCounter(80);
        expect(localStorageUserProgressService.getUserProgress()).toStrictEqual({level: 5, clickCounter: 80})
    })
})