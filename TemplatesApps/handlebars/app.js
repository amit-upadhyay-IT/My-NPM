var exp = require('express');

var app = exp();

var bodyparser = require('body-parser');
var session = require('express-session');

var handlers = require('./routes/routes.js');
var hbars = requies('express-handlebars');

app.set('view engine', 'handlebars');// with handlebars you need to write one more line that you need not write while using ejs
app.engine('handlebars', hbars({}));// this being a new template engine it requires the time of setting up the view engine as handlebars
// we also specify how handlebars should be initialized. So when the first instance of handlebars is to be created then there will be only
// one instance so when the instance is going to be created for this application at that time do you want to initialize it with something or not
// so basically there is a concept of layout page, out application doesn't use any layout so we are keeping the {} empty. But within {}
// you can specify a layout page name

app.use(exp.static(__dirname+"/public"));

//body-parser
app.use(bodyparser());// this is deprecated

//session
app.use(session({secret:"secret", resave:true, saveUninitialized: true}));

app.get('/', handlers.loginPageHandler);
app.get('/toLanding', handlers.landingPageHandler);
app.post('/toCity', handlers.cityPageHandler);

app.get('/players/:name/:age', function(req, res){

    res.write("Name = "+ req.params.name);
    res.end("\n Age = "+req.params.age);
});

var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("Server is listening at port "+port);
});
