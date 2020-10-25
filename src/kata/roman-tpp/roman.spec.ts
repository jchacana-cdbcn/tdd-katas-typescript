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
    it("should return IV when converting 4", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(4)).toBe("IV");
    })
    it("should return V when converting 5", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(5)).toBe("V");
    })
    it("should return VI when converting 6", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(6)).toBe("VI");
    })
    it("should return VII when converting 7", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(7)).toBe("VII");
    })
    it("should return VIII when converting 8", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(8)).toBe("VIII");
    })
})