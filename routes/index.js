var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
 //res.render('index', { title: 'hola' });
  
  var url = 'http://nypost.com/feed/json/';

  request(url, function(error, response, body) {
  	if (!error && response.statusCode == 200) {
  		var parsed = JSON.parse(body);
  		var articles = parsed['articles']; 
  		var article = articles[0];


  		//console.log(article['title']);
  		res.render('index', { title: article['title'] });

  	}
  });

});

module.exports = router;
