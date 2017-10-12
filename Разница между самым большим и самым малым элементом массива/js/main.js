"use strict";
var numbers = [5, -5];
function mostNumbers(numbers){
    var result;
    if (arguments.length > 0){
        var maxNumbers = Math.max.apply(null, arguments);
        var minNumbers = Math.min.apply(null, arguments);
        result = maxNumbers - minNumbers;
        result = 1 * result.toFixed(3);
    }else {
        result = 0;
    }return result;
}
console.log(mostNumbers(numbers));
