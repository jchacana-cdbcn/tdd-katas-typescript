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
    it("should return IIII for 4", () => {
        expect(roman.convert(4)).toBe("IIII");
    });
    })
})