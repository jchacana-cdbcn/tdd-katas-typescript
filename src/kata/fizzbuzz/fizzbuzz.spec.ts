import { fizzbuzz } from './fizzbuzz.kata';
describe('fizzbuzz kata', () => {
    it("should return 1 when number 1", () => {
        expect(fizzbuzz(1)).toBe("1")
    })
    it("should return 2 when number 2", () => {
        expect(fizzbuzz(2)).toBe("2")
    })
    it("should return 4 when number 4", () => {
        expect(fizzbuzz(4)).toBe("4")
    })
})