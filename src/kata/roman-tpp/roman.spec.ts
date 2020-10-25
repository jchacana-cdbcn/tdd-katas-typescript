import {RomanTPPConverter} from "./roman";

describe("Roman TPP converter", () => {
    it("should return I when converting 1", () => {
        const romanConverter = new RomanTPPConverter();
        expect(romanConverter.convert(1)).toBe("I");
    });
    it("should return II when converting 2", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(2)).toBe("II");
    });
})