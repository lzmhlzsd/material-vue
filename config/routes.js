// var user_routes = require('./../app/routes/user')





// module.exports = function(app){
// 	user_routes(app)
// }

var express = require('express');
var router = express.Router();



// router.get('/', function(req,res){
// 	res.render('index');
// });

router.get('*', function(req, res){
	res.render('index');
});

module.exports = router;