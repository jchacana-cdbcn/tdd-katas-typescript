import { fizzbuzz } from './fizzbuzz.kata';
describe('fizzbuzz kata', () => {
    it("should return 1 when number 1", () => {
        expect(fizzbuzz(1)).toBe("1")
    })
})