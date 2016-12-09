import * as types from './mutation-types'

const actions = {
    showDetail({ commit }, id) {
        commit(types.SHOW_DETAIL)
    }
}

const mutations = {
    [types.SHOW_DETAIL](state, { id }) {
        state.activeOrder = id
    }
}
export default {
    actions,
    mutations
}
