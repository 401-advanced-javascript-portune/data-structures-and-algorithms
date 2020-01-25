'use strict'

const insertShiftArray = (test, input) => {
    let int = 0;
    for(let i = 0; i <= test.length - 1; i++){
        let num = test[i] - input;
        if (num <= 0){
            int+=1;
        } 
    }
    let test2 = [];
    for(let i = int; i <= test.length - 1; i++){
        test2.push(test[i]);
    }
    test.length = int;
    test.push(input);
    for(let i = 0; i <= test2.length - 1; i++){
        test.push(test2[i]);
    }
    return test;
};

module.exports = {insertShiftArray};