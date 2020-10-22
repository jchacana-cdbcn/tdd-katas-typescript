import { Roman } from "./roman";

describe("Roman converter ", () => {
    const roman: Roman = new Roman();
    it("should return I for 1", () => {
        expect(roman.convert(1)).toBe("I");
    });

    it("should return II for 2", () => {
        expect(roman.convert(2)).toBe("II");
    });
    it("should return III for 3", () => {
        expect(roman.convert(3)).toBe("III");
    });
    it("should return IV for 4", () => {
        expect(roman.convert(4)).toBe("IV");
    });
    it("should return V for 5", () => {
        expect(roman.convert(5)).toBe("V");
    });
    it("should return VI for 6", () => {
        expect(roman.convert(6)).toBe("VI");
    });
    it("should return VII for 7", () => {
        expect(roman.convert(7)).toBe("VII")
    });
    it("should return VIIII for 9", () => {
        expect(roman.convert(9)).toBe("VIIII");
    });
    it("should return X for 10", () => {
        expect(roman.convert(10)).toBe("X");
    })
})