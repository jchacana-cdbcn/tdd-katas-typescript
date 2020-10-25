import {RomanTPPConverter} from "./roman";

describe("Roman TPP converter", () => {
    it("should return I when converting 1", () => {
        const romanConverter = new RomanTPPConverter();
        expect(romanConverter.convert(1)).toBe("I")
    })
})