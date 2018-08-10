const passport = require('passport');

module.exports = (app) => {
    app.post('/login',
        passport.authenticate('local', {successRedirect: '/', failureRedirect: '/'}));

    app.get('/auth/currentUser', (req, res) => {
        res.send(req.user);
    })
};