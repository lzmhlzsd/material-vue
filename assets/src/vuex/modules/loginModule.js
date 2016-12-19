import { SELECT_MENU } from '../mutation-types'
const state = {
	select: ''
}

const actions = {
	selectMenu: ({commit}, url) => commit(SELECT_MENU, url)
}

const mutations = {
	[SELECT_MENU](state, url) {
        state.select = url
    }
}

export default {
	state,
	actions,
	mutations
}