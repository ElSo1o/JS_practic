"use strict";
var data = [[1,1,1],
            [1,1,1],
            [1,1,1]];
function countNeighbours(data ,row, col) {
    console.log(data);
    var coordinates = [[-1, -1], [-1, 0], [-1, 1], [0, -1],
        [0, 1], [1, -1], [1, 0], [1, 1]];
    var count = 0;
    var n_row = 0;
    var n_col = 0;
    coordinates.forEach(function(diff){
        n_row = row + diff[0];
        n_col = col + diff[1];
        if (0 <= n_row && n_row < data.length &&
            0 <= n_col && n_col < data[n_row].length) {
            if (data[n_row][n_col]) {

                count += 1
            }
        }
    });
    return count;
}
document.write(countNeighbours(data,0,1));
