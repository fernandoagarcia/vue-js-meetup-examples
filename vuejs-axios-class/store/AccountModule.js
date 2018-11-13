import { AccountService } from '@resource/axios'

const state = {
  username: null,
  firstName: null,
  lastName: null
}

const getters = {
  getID: state => state.username,
  getFirstName: state => state.firstName,
  getLastName: state => state.lastName
}

const actions = {
  async fetchUser ({ commit, state }, d) {
    let response = await AccountService.fetchUser(d)
    commit('SET_USERNAME', response.username)
    commit('SET_FIRSTNAME', response.firstName)
    commit('SET_LASTNAME', response.lastName)
  }
}

const mutations = {
  SET_USERNAME: (state, d) => (state.username = d),
  SET_FIRSTNAME: (state, d) => (state.firstName = d),
  SET_LASTNAME: (state, d) => (state.lastName = d)
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}