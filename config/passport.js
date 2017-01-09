var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	var Usuario = mongoose.model('Usuario');
	passport.use(
		new GitHubStrategy(	
			{
				clientID: '37d4402ded01bfda822d',
				clientSecret: '1d0d951645943844b0b190ebbfb7e17f7086f30c',
				callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
			}, 
			function(accessToken, refreshToken, profile, done) {
				Usuario.findOrCreate(
					{ "login" : profile.username},
					{ "nome" : profile.username},
					function(erro, usuario) {
						if(erro) {
							console.log(erro);
							return done(erro);
						}
						return done(null, usuario);
					}
				);
			}
		)
	);
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});
	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec().then(function(usuario) { done(null, usuario); });
	});
};