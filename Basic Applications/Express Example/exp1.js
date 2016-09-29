var exp = require("express");

var app = exp();

app.get("/data", function(req, res){
    res.send("You called data");
}); // this is a very powerful method I'm calling, basically I'm
// that whenever any get request (not the post,put,delete request) with
// ./data then this function of mine has to be executed

// similarly we can make it for downloading something
app.get("/download", function(req, res){
    res.download("./first.js", function(){
        console.log("download is over");
    });
});

app.listen("5555", function(){
    console.log("Server is on at 5555");
});

// so in this one line of code we import express lib, we create and instance
// of it and the createServer insternally gets called and we start listening
// on the port number 5555.
