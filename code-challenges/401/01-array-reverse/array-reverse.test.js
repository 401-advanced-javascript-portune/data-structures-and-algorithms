let arrayReverse = require('./array-reverse.js');

// -------------------------------------------------------------------
//
// Tests to confirm that the array recieved is in reverse order from 
// recieved
//
// -------------------------------------------------------------------
describe('Reverse Array', () => {
    it('Array that was recieved it in reverse order', () => {
        expect(arrayReverse.reverseArr([1,2,3])).toStrictEqual([3,2,1]);
    });
});