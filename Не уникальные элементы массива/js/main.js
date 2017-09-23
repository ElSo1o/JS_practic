"use strict";
var data = [1,3,2,1,3];
function nonUniqueElements(data) {
    var result = [];

    for(var i = 0; i < data.length ; i++){
        data.indexOf(data[i]) != data.lastIndexOf(data[i]) ? result.push(data[i]) : result;
    }
    return result;
}
document.write(nonUniqueElements(data));