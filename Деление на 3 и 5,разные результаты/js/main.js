"use strict";
var data = 3;
function fizzBuzz(data) {
    var result = '';
    var full = 'Fizz Buzz';
    var firstWord = 'Fizz';
    var secondWord = 'Buzz';
    result = focos(data);
    function focos(data_3 , data_5) {
        data_3 = data/3;
        data_5 = data/5;
        if(data_3-Math.floor(data_3) == 0 || data_5-Math.floor(data_5) == 0){
            if(data_3-Math.floor(data_3) == 0){
                result = firstWord;
            }
            if (data_5-Math.floor(data_5) == 0){
                result = secondWord;
            }
            if(data_3-Math.floor(data_3) == 0 && data_5-Math.floor(data_5) == 0){
                result = full;
            }
        }
        else {
            result = data.toString();
        }
        return result;
    }
    return result;
}
console.log(fizzBuzz(data));