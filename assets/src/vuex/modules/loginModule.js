import { SET_LOGIN_FLAG, SELECT_MENU, SET_MENU, SET_BASE_INFO, GET_BASE_INFO } from '../mutation-types'
import _ from 'underscore'

let localStorage = window.localStorage
const state = {
    login: true, //是否是登录界面
    select: {
    	name: '',
    	url: ''
    },
    menu: []
}

const actions = {
    selectMenu: ({ commit }, url) => commit(SELECT_MENU, url),
    //setMenu: ({ commit }, menu) => commit(SET_MENU, menu),
    setBaseInfo: ({ commit }, data) => commit(SET_BASE_INFO, data),
    getBaseInfo: ({ commit }) => commit(GET_BASE_INFO)
}

const mutations = {
    [SELECT_MENU](state, url) {
    	_.each(state.menu, function(value, key){
    		_.each(value.sub_menu, function(value, key){
    			if(value.url == url){
    				state.select.name = value.name
    				state.select.url = url
    			}
    		})
    	})
    },
    [SET_MENU](state, menu) {
        state.menu = menu
    },
    [SET_BASE_INFO](state, data) {
    	state.login = false
        localStorage.setItem('BaseInfo', JSON.stringify(data))
        state.menu = data
    },
    [GET_BASE_INFO](state, data) {
        if (localStorage.getItem('BaseInfo')) {
            let data = JSON.parse(localStorage.getItem('BaseInfo'))
            state.login = false
            state.menu = data
        }
    }
}

const getters = {
    login: state => {
        return state.login
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
