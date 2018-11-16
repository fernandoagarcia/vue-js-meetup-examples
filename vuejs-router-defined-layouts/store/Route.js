// initial state
const initialState = {
  name: null,
  path: null,
  hash: null,
  query: null,
  params: null,
  fullPath: null,
  meta: null
}

const getters = {
  getRouteMeta: state => state.meta,
  getRouteParams: state => state.params,
  getRouteName: state => state.name,
  getRoutePath: state => state.path,
  getRouteFullpath: state => state.fullPath,
  getRouteQuery: state => state.query
}

const actions = {
  clearRoute: ({ commit }) => {
    commit('SET_ROUTE_META', initialState.meta)
    commit('SET_ROUTE_PARAMS', initialState.params)
    commit('SET_ROUTE_NAME', initialState.name)
    commit('SET_ROUTE_PATH', initialState.path)
    commit('SET_ROUTE_FULLPATH', initialState.fullPath)
    commit('SET_ROUTE_QUERY', initialState.query)
  }
}

const mutations = {
  SET_ROUTE_META: (state, d) => (state.meta = d),
  SET_ROUTE_PARAMS: (state, d) => (state.params = d),
  SET_ROUTE_NAME: (state, d) => (state.name = d),
  SET_ROUTE_PATH: (state, d) => (state.path = d),
  SET_ROUTE_FULLPATH: (state, d) => (state.fullPath = d),
  SET_ROUTE_QUERY: (state, d) => (state.query = d)
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
