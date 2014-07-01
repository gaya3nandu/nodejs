/**
 * Created by 402618 on 6/30/2014.
 */
console.log("hi")
var fs = require('fs');
var a=10;
var b=20;
console.log(a+b); 

var contents = fs.readFile('file1.txt','utf8', function(err, contents){ //callback
 console.log(contents);
});
console.log("Hello Node\n");    

var contents = fs.readFile('file2.txt','utf8', function(err, contents){  //callback
console.log(contents);
});
console.log("Hello again!");
