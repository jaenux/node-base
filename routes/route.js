var action = require('../actions/action');

module.exports = function(app){
	var express = require('express');
	var router = express.Router();

	router.get('/',function(req,res){
		action(req,res);
	});

	return router;
};
