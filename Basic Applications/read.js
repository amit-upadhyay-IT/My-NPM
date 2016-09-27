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

    if (err)
    {
        console.log("File not found");
    }
    else
    {
        console.log(fileData);
    }

});//    readFile() is an Async api and one interesting thing is that
// in the fs library for everything there is two versions of the method. One is
// the async version and the other is synchronous version. In node.js application
// we should always try to use the Async version of any method. And as I said if
// there is a Async  method then we might have a corrosponding synchronous version.
// try to use the Async version of the method to make use of async callback use of
// node.js application.

console.log("Program ends");

//understanding the above code: typically in any application we have a library and
//our application call methods of the existing libraies. But the moment you write a
//function of a method of your own and you write it in a certain specification then
//the library starts calling your function instead of you calling the library function.
//So the moment your functions are called by the library then those functions of yours
//are called callback functions.
//Note : function(err, fileData){} is an anoynomous function which we are passing to
//the readFile function that comes under fs object.
//the readFile function will read the contents from the file specified as the first
//argument and after reading it will call the anoynomous function of mine
//In all callback functions we have atleast two parameters, where the first parameter
//is always error.
//Question) what does these two parameters mean?
//Answer) err (error) means if the fs.readFile method tries to read the file and it
//doesn't find the file at that path or the file has got some king of problem/error.
//So those are error conditions and in those situtations all the error specification,
//error value will be passed on the first argument of your function.
//Otherwise if it is able to read it successfully then the content of the file is
//passed to you in the form of second argument which is fileData

// Question) if option variable is in JSON, then why are we not enclosing 'encoding'
// into quotes?
// Answer) In a typical JSON format we should enclose the key in quotes but even this
// is also fine.

// Understanding the option object: In this object we have 2 different fields encoding
// and flag.

// So this is Async call example
