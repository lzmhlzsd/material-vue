import { SELECT_MENU,SET_MENU } from '../mutation-types'
const state = {
	select: '',
	menu: []
}

const actions = {
	selectMenu: ({commit}, url) => commit(SELECT_MENU, url),
	setMenu: ({commit}, menu) => commit(SET_MENU, menu)
}

const mutations = {
	[SELECT_MENU](state, url) {
        state.select = url
    },
    [SET_MENU](state, menu) {
    	state.menu = menu
    }
}

export default {
	state,
	actions,
	mutations
}