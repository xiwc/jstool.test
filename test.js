var fs = require('fs');

var t = fs.readFileSync('data2.json', 'utf-8');

var lines = t.split('\r\n');

var arr = [];
lines.forEach(function(e, i) {

    if (e.indexOf(':') !== -1) {
        // console.log(e);
        arr.push(e);
    }
});

arr.forEach(function(e, i) {
    var k = e.split(':')[0].trim();
    arr.forEach(function(e2, i2) {
        var k2 = e2.split(':')[0].trim();
        if (k === k2 && i !== i2) {
            if ('real,method,mock,ismock,payload,desc,projectId'.indexOf(k) === -1)
                console.log(k);
        }
    });
});

// console.log(lines);
