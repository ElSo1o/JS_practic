"use strict";
var data = [0, 1, 2, 3, 4, 5];
function evenLast(data) {
    var sum = 0;
    if(data.length == 0){
    }
    else{
        for (var i = 0;i < data.length;i++){
            if(i % 2 == 0){
                sum += data[i];
            }
        }
        sum = sum * data[data.length-1];
    }
    return sum;
}
console.log(evenLast(data));