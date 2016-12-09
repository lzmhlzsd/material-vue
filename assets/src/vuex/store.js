import Vue from 'vue'
import Vuex from 'vuex'

//导入各个模块的初始状态和mutations
import orderList from './modules/orderList'
//import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	//actions,
    //组合各个模块
    modules: {
        orderList
    },
    getters: {
    	//orders: ({orderList}) => orderList.order,
    	orders: state => {
    		return state.orderList.orders
    	},
    	activeOrder: state => {
    		return state.orderList.activeOrder
    	}
    }
})