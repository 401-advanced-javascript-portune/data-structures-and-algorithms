'use strict'

const reverseArr = (arr) => {
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

module.exports = {reverseArr};