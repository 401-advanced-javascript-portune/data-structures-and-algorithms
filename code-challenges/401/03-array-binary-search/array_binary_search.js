'use strict'

const BinarySearch = (arr, input) => {
    let test = -1;
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] === input){
            test = i;
        }
    }
    return test;
}

module.exports = {BinarySearch};