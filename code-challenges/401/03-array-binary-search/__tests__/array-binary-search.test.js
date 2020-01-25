'use strict'
const search = require('../array_binary_search.js');

describe('Find the index of input', () => {
   it('Returns the index of input', () => {
       expect(search.BinarySearch([1,2,3,4,5,6,7,8,9,10], 10)).toStrictEqual(9);
   }) 
   it('Returns no index', () => {
       expect(search.BinarySearch([1,2,3,5,6], 4)).toStrictEqual(-1);
   })
})