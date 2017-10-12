"use strict";
var data = 1234560;

function digitsMultip(data) {
    data = data.toString();
    var dataArr = data.split('');
    function isBigEnough(value) {
        return value > 0;
    }
    var sortDataArr = dataArr.filter(isBigEnough);
    var result = sortDataArr.reduce(function(a, b) {
        return a * b;
    });
    result = +result;
    return result;
}


document.write(digitsMultip(data));
