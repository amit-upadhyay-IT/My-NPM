var exp = require('express');

var app = exp();

var bodyparser = require('body-parser');
var session = require('express-session');

var handlers = require('./routes/routes.js');

app.use(exp.static(__dirname+"/public"));

//body-parser
app.use(bodyparser());// this is deprecated

//session
app.use(session({secret:"secret", resave:true, saveUninitialized: true}));

app.get('/', handlers.loginPageHandler);
app.get('/toLanding', handlers.landingPageHandler);
app.post('/toCity', handlers.citylandingcityPageHandler);

app.get('/players/:name/:age', function(req, res){

    res.write("Name = "+ req.params.name);
    res.end("\n Age = "+req.params.age);
});

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening at port "+port);
});
