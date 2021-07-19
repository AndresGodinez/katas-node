const adder = require('./adder')

describe('adder', () => {
    it('should add two numbers ', () => {
        expect(adder(1, 2)).toBe(3)
    });
    it('should return sole number', () => {
        expect(adder(5)).toBe(5)
    });
    it('should add three numbers', () => {
        expect(adder(1, 2, 3)).toBe(6)
    });
    it('should add any numbers', () => {
        expect(adder(1, 2, 3, 4, 5, 6)).toBe(21)
    });
    it('should be 0 if not passed a number', () => {
        expect(adder()).toBe(0)
    });
    it('should be 0 if not a number ', () => {
        expect(adder('text')).toBe(0)
    });
})