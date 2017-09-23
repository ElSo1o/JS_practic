"use strict";
var data = [3,6,20,99,10,15];
function median(data) {
    data.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    });
    console.log(data);
    for(var i = 0; i < data.length; i++){


    if (data.length){
        //var test = data.length;
        if (data.length % 2 == 0){
            console.log(data[i]);
            var celoeFirst = (data.length)/ 2;
            var result = Math.round(celoeFirst);
            console.log(celoeFirst);
            var celoeSecond = result + 1;
            var result2 = (data[celoeFirst-1] + data[celoeSecond-1]) / 2;
            var resultChetnoe = result2;

        }else{
            var neceloe = data.length / 2 - 0.5;
              resultChetnoe = data[neceloe];
        }

    }
}
    //console.log(resultChetnoe);
    return resultChetnoe;
}
document.write(median(data));