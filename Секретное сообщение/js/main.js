"use strict";
data = "How are you? Eh, ok. Low or Lower? Ohhh.";
function findMessage(data) {
    var result = '';
    var regExp = /[A-Z]/g;
    if (regExp.test(data)){
        result = data.match(regExp).join('');
    }
    else {
        result = '';
    }
    return result;
}
console.log(findMessage(data));
