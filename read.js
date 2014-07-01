/**
 * Created by 402618 on 6/30/2014.
 */
var fs = require('fs');
var file = 'test.json';
var file2='file1.txt';
var a;


fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);

  console.log(data);
 a=data.name;
a='bb';
    console.log(a);

});
 console.log('outside fn');
 console.log(a);

var fs = require('fs');
fs.writeFile(file2, a, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});