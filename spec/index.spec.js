const mathLib = require('../dist/main.js');

describe('a main function', () => {
    it('should 1 add 2 = 3', () => {
        expect(mathLib.add(1, 2)).toBe(3);
    })
    it('should \'1\' add 2 = 3', () => {
        expect(mathLib.add('1', 2)).toBe(3);
    })
})