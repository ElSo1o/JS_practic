"use strict";
var numbers = [-20, -30, 10, 15];

function absoluteSorting(numbers){
    numbers = numbers.sort(function (a,b) {
        return Math.abs(a) - Math.abs(b);
    });
    console.log(numbers);
    return numbers
}
absoluteSorting(numbers);