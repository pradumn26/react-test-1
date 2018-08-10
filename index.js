const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: ['kjdkajajkdaknkja']
}));
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./passportUtil');
require('./routes/authRoutes')(app);

app.listen(5000, () => {
    console.log(`app is hosted on: ${4000}`);
});