var hppt = require("http");

var server = http.createServer(function(req, res){

    res.end("Hello World");

});

// here we will again use async callback, for this will are passing the
// function as object as argument of createServer method
// Whatever we want this webserver to be done will be written inside the
// function body

server.listen(3333, function(){
    console.log("HTTP server is running on port 3333");
});
