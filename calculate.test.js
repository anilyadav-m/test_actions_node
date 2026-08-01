// create a unit test cases for the calculate function in the calculate.js file using Jest framework. The calculate function takes two numbers and an operator as input and returns the result of the operation. The supported operators are '+', '-', '*', and '/'.
// The test cases should cover all the supported operators and also test for edge cases such as division by zero. using jest

const {add,subtract,multiply,divide} = require('./calculate')
describe('Calculator Functions', () => {
    test('addition', () => {
        expect(add(2, 4)).toBe(6);
    });
    test('subtraction', () => {
        expect(subtract(5, 2)).toBe(3);
    });
    test('multiplication', () => {
        expect(multiply(2, 9)).toBe(6);
    });
    test('division', () => {
        expect(divide(6, 3)).toBe(2);
    });
    test('division by zero', () => {
        expect(divide(6, 0)).toBe(Infinity);
    });
});