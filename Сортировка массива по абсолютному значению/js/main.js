"use strict";
var numbers = [-20, -5, 10, 15];

function absoluteSorting(numbers){
    function ascending(a ,b) {
        return a > b
    }
    numbers = numbers.sort(ascending());
    return numbers
}
console.log(absoluteSorting(numbers));

