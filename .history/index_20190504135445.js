const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require ('body-parser');
require('./models/User');
require('./services/passport');


//^^^order of require statement can result in error
//model must be declared first
//instruct attempt to connect to theat copy of mongo db that we provisioned

mongoose.connect(keys.mongoURI);


console.log('hello')
const app = express();
console.log('hello')










//parse middleware uses app.use
//parse the body and assign
//it to the req.body
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//returns a function,
//second set of () immediately calls the function we just required in
//the app is passed into the arrow function
 //we attached the 2 route handlers, & the app is all happy because it got its 2 routes.

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
console.log('hello')
const PORT = process.env.PORT || 5000;
console.log(PORT)
app.listen(PORT);
console.log('hello')