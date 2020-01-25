'use strict'
const shift = require('./array-shift.js');
console.log(shift);
describe('Array Shift', () => {
    it('returns an array that is sorted after input', () => {
        expect(shift.insertShiftArray([1,2,3,5,6], 4)).toStrictEqual([1,2,3,4,5,6]);
    })
});