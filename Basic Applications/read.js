// here we are gonna use filesystem core library/module of node.js. beign
// a core module this is already installed with node.js
// but this library/module we need to import in our code by using the require
// keyword.

var fs = require('fs');     // fs stands for filesystem
// every module is like a package in java language.
// this application will read the text of a file.
// since we are gonna use textual data so its encoding will be utf-8 to open
// the file in read mode we will use r.

var options  = {encoding: 'utf8', flag: 'r'};
// anything that we encolse into a curly braces represents an object.
// the variable options refers to an object which has got two fields
// one is encoding and the other field is flag.
// we are gonna use the options object to read the file.

fs.readFile('./randomfile.txt', options, function(err, fileData){

});//    readFile() is an Async api and one interesting thing is that
// in the fs library for everything there is two versions of the method. One is
// the async version and the other is synchronous version. In node.js application
// we should always try to use the Async version of any method. And as I said if
// there is a Async  method then we might have a corrosponding synchronous version.
// try to use the Async version of the method to make use of async callback use of
// node.js application.

console.log("Program ends");
