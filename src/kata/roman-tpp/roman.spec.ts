import {RomanTPPConverter} from "./roman";

describe("Roman TPP converter", () => {
    it("should return I when converting 1", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(1)).toBe("I");
    });
    it("should return II when converting 2", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(2)).toBe("II");
    });
    it("should return III when converting 3", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(3)).toBe("III");
    });
    it("shouls return IV when converting 4", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(4)).toBe("IV");
    })
})