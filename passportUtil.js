const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findOne(id).then((user) => {done(null, user)});
});

passport.use(new LocalStrategy(
   function (username, password, done) {
       User.findOne({username: username, password: password})
           .then((user) => {
               if (!user) {
                   done(null, false);
               }

               done(null, user);
           })
   } 
));