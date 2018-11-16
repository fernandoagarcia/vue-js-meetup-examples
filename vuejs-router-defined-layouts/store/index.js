import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import Route from './Route'
import router from '@/router'
const isNotProd = process.env.NODE_ENV !== 'production'

const createStore = () => {
  return new Vuex.Store({

    plugins: []
      .concat(isNotProd ? [createLogger()] : []),
    modules: {
      Route
    }
  })
}

export default createStore