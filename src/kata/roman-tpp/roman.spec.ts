import {RomanTPPConverter} from "./roman";

describe("Roman TPP converter", () => {
    it("should return roman when converting number", () => {
        const romanTPPConverter = new RomanTPPConverter();
        expect(romanTPPConverter.convert(1)).toBe("I");
        expect(romanTPPConverter.convert(2)).toBe("II");
        expect(romanTPPConverter.convert(3)).toBe("III");
        expect(romanTPPConverter.convert(4)).toBe("IV");
        expect(romanTPPConverter.convert(5)).toBe("V");
        expect(romanTPPConverter.convert(6)).toBe("VI");
        expect(romanTPPConverter.convert(7)).toBe("VII");
        expect(romanTPPConverter.convert(8)).toBe("VIII");
        expect(romanTPPConverter.convert(9)).toBe("IX");
        expect(romanTPPConverter.convert(10)).toBe("X");
        expect(romanTPPConverter.convert(40)).toBe("XL");
        expect(romanTPPConverter.convert(45)).toBe("XLV");
        expect(romanTPPConverter.convert(50)).toBe("L");
        expect(romanTPPConverter.convert(60)).toBe("LX");
        expect(romanTPPConverter.convert(90)).toBe("XC");
        expect(romanTPPConverter.convert(100)).toBe("C");
        expect(romanTPPConverter.convert(400)).toBe("CD");
        expect(romanTPPConverter.convert(500)).toBe("D");
        expect(romanTPPConverter.convert(900)).toBe("CM");
        expect(romanTPPConverter.convert(1000)).toBe("M");
        expect(romanTPPConverter.convert(846)).toBe("DCCCXLVI");
        expect(romanTPPConverter.convert(1999)).toBe("MCMXCIX");
        expect(romanTPPConverter.convert(2008)).toBe("MMVIII");
    })
})