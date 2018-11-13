import { MessageService } from '@resource/axios'

const state = {
  messages: null
}

const getters = {
  getMessages: state => state.messages
}

const actions = {
  async fetchMessages ({ commit, state }, d) {
    let response = await AccountService.fetchMessages(d)
    commit('SET_MESSAGES', response.messages)
  }
}

const mutations = {
  SET_MESSAGES: (state, d) => (state.messages = d)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}