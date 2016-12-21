var code = require('./../../../config/errors');
module.exports = function() {
    var data = {
        loginsuccess: {
            code: 1003,
            msg: code['1003'],   //登录成功
            data: [
	            { 
	            	id: 1, menu: '我的生意', url: '', sub_menu: [
	                	{ id: 2, menu: '门店收银', url: '/store' },
	                	{ id: 3, menu: '官网收银', url: '/site' },
	                	{ id: 4, menu: '微信商城', url: '/wechat' },
	                	{ id: 5, menu: '自由收款', url: '/dynamic' },
	                	{ id: 6, menu: '业务员推广', url: '/cashier' },
	                	{ id: 7, menu: '红包云', url: '/hongbao' }
	                ]
	            },
	            { 
	            	id: 8, menu: '我的收银', url: '', sub_menu: [
	                	{ id: 9, menu: '账户明细', url: '/journal' },
	                	{ id: 10, menu: '我要提现', url: '/withdraw' },
	                	{ id: 11, menu: '退款纪录', url: '/refund' }
	                ]
	            }
            ]
        },
        loginfail: {
            code: 1004,
            msg: code['1004']
        },
        cashier: {
        	code: 1004,
            msg: code['1004'],
            data: [
	        	{
	                name: 'John Smith',
	                status: 'Employed',
	                selected: true
	            }, {
	                name: 'Randal White',
	                status: 'Unemployed'
	            }, {
	                name: 'Stephanie Sanders',
	                status: 'Employed',
	                selected: true
	            }, {
	                name: 'Steve Brown',
	                status: 'Employed'
	            }, {
	                name: 'Joyce Whitten',
	                status: 'Employed'
	            }, {
	                name: 'Samuel Roberts',
	                status: 'Employed'
	            }, {
	                name: 'Adam Moore',
	                status: 'Employed'
	            }
	        ]
    	}
    }
    return data;
}
