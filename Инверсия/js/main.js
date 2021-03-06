"use strict";
var sequence = [1, 2, 5, 3, 4, 7, 6];
function countInversion(sequence){
    if (sequence === undefined) throw new Error("Array must be defined to count inversions");
    if (sequence.length === 0 || sequence.length === 1) return 0;

    var tally = 0;
    sort(sequence);
    return tally;


    function sort(arr) {
        if (arr.length === 1) return arr;
        var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
        return merge(sort(arr), sort(right));
    }
    function merge(left, right){
        var merged = [];
        var l = 0, r = 0;
        var multiplier = 0;
        while (l < left.length || r < right.length){
            if (l === left.length){
                merged.push(right[r]);
                r++;
            } else if (r === right.length){
                merged.push(left[l]);
                l++;
                tally += multiplier;
            } else if (left[l] < right[r]) {
                merged.push(left[l]);
                tally += multiplier;
                l++;
            } else {
                merged.push(right[r]);
                r++;
                multiplier++;
            }
        }
        return merged;
    }
}
console.log(countInversion(sequence));