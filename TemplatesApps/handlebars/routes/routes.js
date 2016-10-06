
exports.loginPageHandler = function (req, res){// this is mapping the home page

    //req.session.destroy();
    res.render('login.handlebars', {});

}

exports.landingPageHandler = function (req, res){

    // it is the handler for the page which comes after user logs in
    // if by that time if the user has provided a name (that name will be present in session)
    // then we are loading that name into the variable person from session, if not then
    // that name is coming via login page in the request query parameter and the input text
    // whatever is being provided in the login page the nave attribute of that input text
    // will be nm. So the query parameter of request which is going to be get request so login request
    // if you remember is a get request. So whatever the parameter nm will have then that will be
    // coming to you as req.query.nm and that value we are populating in person variable

    var person;
    if (res.session.userName)
    {
        person = req.session.userName;
    }
    else{
         person = req.query.nm;
    }

    // new we are rendering the landingpage.

    res.render('landingpage.handlebars', {welcomeMessage:person});

    // so server side code for the landingPageHandler is only this

}
exports.cityPageHandler = function(req, res){

};

// so we have structure of all three page handlers.
