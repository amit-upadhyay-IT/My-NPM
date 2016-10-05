var exp = require('express');

var app = exp();

app.use(exp.static(__dirname+"/public"));

app.get('/players/:name/:age', function(req, res){

    res.write("Name = "+ req.params.name);
    res.end("\n Age = "+req.params.age);
});

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening at port "+port);
});
