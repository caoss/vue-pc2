import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalRegister: 0,
    totalActiver: 0,
    topMouthActiver: 0,
    todayLogin: 0,
    projectList: [],
    detail: {},
    totalCount: 0
  },
  actions,
  mutations,
  getters,
  modules:{
    list
  }
})

