"use strict";
var array = [1, 2, 3, 4];
var n = 2;
function indexPower(array, n){
    var result;
    if (n > array.length - 1){
        result = -1;
    }else {
        result = Math.pow(array[n],n);
    }
    return result
};
console.log(indexPower(array, n));