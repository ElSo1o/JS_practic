"use strict";
var data = "abcc!";
function mostWanted(data) {
    data = data.toLowerCase();
    function valid(dataString) {
        if (data.replace(/\s/g, '') || data.replace(/\d/g, '') || data.replace(/\./g, '') || data.replace(/\?/g, '') || data.replace(/\!/g, '') || data.replace(/\,/g, '') || data.replace(/\"/g, '') || data.replace(/\'/g, '') || data.replace(/\-/g, '')) {
            dataString = dataString.replace(/\s/g, '');
            dataString = dataString.replace(/\d/g, '');
            dataString = dataString.replace(/\./g, '');
            dataString = dataString.replace(/\?/g, '');
            dataString = dataString.replace(/\!/g, '');
            dataString = dataString.replace(/\,/g, '');
            dataString = dataString.replace(/\"/g, '');
            dataString = dataString.replace(/\'/g, '');
            dataString = dataString.replace(/\-/g, '');
        }
        return dataString;
    }
    data = valid(data).split('').sort();

        for (var i = 0; i < data.length; i++) {
            data = data.reduce(function (acc, el) {
                acc[el] = (acc[el] || 0) + 1;
                return acc;
            }, {});
        }


    var result = "";
    var max = 0;

    for (var key in data){
        if(data.hasOwnProperty(key)){
                if (max < data[key]) {
                    max = data[key];
                    result = key;
                    console.log(result);
                }
        }
    }

return result;
}
document.write(mostWanted(data));
