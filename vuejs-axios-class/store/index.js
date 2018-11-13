import Vue from 'vue'
import Vuex from 'vuex'
import MessageModule from './MessageModule'
import AccountModule from './AccountModule'

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  Message: MessageModule,
  Account: AccountModule
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
