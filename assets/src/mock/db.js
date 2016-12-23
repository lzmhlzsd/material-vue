var code = require('./../../../config/errors');
module.exports = function() {
    var data = {
        loginsuccess: {
            code: 1003,
            msg: code['1003'],   //登录成功
            data: [
            	{ 
	            	id: 1, name: '我的生意', url: '', sub_menu: [
	                	{ id: 2, name: '门店收银', url: '/store', sub_menu: [] },
	                	{ id: 3, name: '官网收银', url: '/site', sub_menu: [] },
	                	{ id: 4, name: '微信商城', url: '/wechat', sub_menu: [] },
	                	{ id: 5, name: '自由收款', url: '/dynamic', sub_menu: [] },
	                	{ id: 6, name: '业务员推广', url: '/cashier', sub_menu: [] },
	                	{ id: 7, name: '红包云', url: '/hongbao', sub_menu: [] }
	                ]
	            },
	            { 
	            	id: 8, name: '我的收银', url: '', sub_menu: [
	                	{ id: 9, name: '账户明细', url: '/journal', sub_menu: [] },
	                	{ id: 10, name: '我要提现', url: '/withdraw', sub_menu: [] },
	                	{ id: 11, name: '退款纪录', url: '/refund', sub_menu: [] }
	                ]
	            },
	            { 
	            	id: 12, name: '我的交易', url: '', sub_menu: [
	                	{ id: 13, name: '订单明细', url: '/journal', sub_menu: [] },
	                	{ id: 14, name: '商品管理', url: '/withdraw', sub_menu: [] },
	                	{ id: 15, name: '客户信息', url: '/refund', sub_menu: [] }
	                ]
	            },
	            { 
	            	id: 16, name: '分账宝', url: '', sub_menu: [
	                	{ id: 17, name: '策略管理', url: '/journal', sub_menu: [] },
	                	{ id: 18, name: '子账户管理', url: '/withdraw', sub_menu: [] }
	                ]
	            },
	            { 
	            	id: 19, name: '管理配置', url: '', sub_menu: [
	                	{ id: 20, name: '商户信息', url: '/journal', sub_menu: [] },
	                	{ id: 21, name: '绑定银行卡', url: '/withdraw', sub_menu: [] },
	                	{ id: 22, name: '操作日志', url: '/withdraw', sub_menu: [] },
	                	{ id: 23, name: '操作员', url: '/withdraw', sub_menu: [] }
	                ]
	            },
	            { 
	            	id: 19, name: '开发对接', url: '', sub_menu: [
	                	{ id: 20, name: '接口文档', url: '/journal', sub_menu: [] },
	                	{ id: 21, name: '密钥管理', url: '/withdraw', sub_menu: [] },
	                	{ id: 22, name: 'webhook', url: '/withdraw', sub_menu: [] },
	                	{ id: 23, name: '代码样例', url: '/withdraw', sub_menu: [] }
	                ]
	            }
            ]
        },
        loginfail: {
            code: 1004,
            msg: code['1004']
        },
        menus: {
            code: 0000,
            msg: code['0000'],
            data: []
        },
        cashier: {
        	code: 0000,
            msg: code['0000'],
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
