var passport = require('passport');
module.exports = function(app) {
	app.get('/auth/github', passport.authenticate('github'));
	app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/' }));
	
	/*
	app.route('/auth/github').get(teste, passport.authenticate('github'));
	app.route('/auth/github/callback').get(teste, passport.authenticate('github', { successRedirect: '/view/' }));
	*/
	
};

