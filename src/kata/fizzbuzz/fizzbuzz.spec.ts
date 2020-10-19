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
    it("should return Fizz when number 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz")
    })
    it("should return Buzz when number 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz")
    })
    it("should return Fizz when number is 6", () => {
        expect(fizzbuzz(6)).toBe("Fizz")
    })
    it("should return Fizz when number is 9", () => {
        expect(fizzbuzz(9)).toBe("Fizz")
    })
    it("should return Buzz when number is 10", () => {
        expect(fizzbuzz(10)).toBe("Buzz")
    })
    it("should return 11 when number is 11", () => {
        expect(fizzbuzz(11)).toBe("11")
    })
    it("should return Fizz when number is 12", () => {
        expect(fizzbuzz(12)).toBe("Fizz")
    })
})