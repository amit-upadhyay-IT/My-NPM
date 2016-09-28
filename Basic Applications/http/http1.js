var http = require("http");

var server = http.createServer(function(req, res){

    console.log("Method = " + req.method);
    res.end("Hello Amit Upadhyay");

});

// here we will again use async callback, for this will are passing the
// function as object as argument of createServer method
// Whatever we want this webserver to be done will be written inside the
// function body

server.listen("3333", function(){
    console.log("HTTP server is running on port 3333");
});

// So first I'm importing the library http and then I'm calling createServer
// method of that which is returning me a http server object and while doing
// that I'm passing a callback function of mine and then it will create a http
// server for me but it will not start listening on that. And whenever any request
// comes into the http server then at that time the req parameter will be made
// available in req variable and whatever response I will write then that response
// will be sent by the http server to the web browsers. So this application can very
// easily be accessed over web browsers
