var passport = require('passport');
module.exports = function(app) {

	app.get('/logout', function(req, res) { req.logout(); res.redirect('/'); });
	app.post('/signup', passport.authenticate('local-signup', { successRedirect: '/' }));
	app.post('/login', passport.authenticate('local-login', { successRedirect: '/' }));

	// Facebook routes
	app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
	app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/' }));

	// Twitter routes
	app.get('/auth/twitter', passport.authenticate('twitter'));
	app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/' }));

	// Google routes
	app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
	app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/' }));

	// GitHub routes
	//app.get('/auth/github', passport.authenticate('github'));
	//app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/' }));

};


