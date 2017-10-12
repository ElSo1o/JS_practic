"use strict";
var first = 'hello,world';
var second = "hello,earth";
function commonWords(first, second){

    var words = [];
    first = first.split(",");
    second = second.split(",");
    for ( var i = 0; i < first.length; i++ ) {
        words[first[i]] = 1;
    }
    for ( var i = 0; i < second.length; i++ ) {
        words[second[i]] += 1;
    }
    var commonWords = [];
    for ( var k in words ) {
        if ( words[k] >= 2 ) {
            commonWords.push(k);
        }
    }
    commonWords.sort();
    var ret = "";
    for ( var i = 0; i < commonWords.length; i++ ) {
        if ( ret.length ) { ret += ","; }
        ret += commonWords[i];
    }

    return ret;
}
var result = commonWords(first, second);
console.log(result);