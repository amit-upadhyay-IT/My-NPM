var exp = require("express")();

exp.listen("5555", function(){
    console.log("Server is on at 5555");
});

// so in this one line of code we import express lib, we create and instance
// of it and the createServer insternally gets called and we start listening
// on the port number 5555.
