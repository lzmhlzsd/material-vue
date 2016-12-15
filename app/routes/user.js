// 增加用户
// router.get('/addUser', function(req, res, next) {
// 	userDao.add(req, res, next);
// });
// 
var indexCtrl = require('./../controllers/userCtrl')

module.exports = function(app) {
    app.get('/', function(req, res) {
    	res.render('index')
        // if (typeof req.session['user'] == 'undefined') {
        //     res.render('login');
        // } else {
        //     res.redirect('/index');
        // }
    });
    app.get('/api/login', indexCtrl.xxx)
}
