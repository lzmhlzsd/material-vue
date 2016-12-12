var Mock = require('mockjs')
var unit = require('./../plugin/unit')
var code = require('./../plugin/code')
var data = Mock.mock('login', 'post', function(options) {
    var body = unit.string2json(options.body)
    if(body.account == 'admin' && body.password == '123'){
    	return {
    		code: 1000,
    		data: [],
    		msg: code[1003]
    	}
    }
})


export default Mock;