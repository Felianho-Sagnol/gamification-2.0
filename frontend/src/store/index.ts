import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
    sections: null
  },
  getters: {
    getIsAuthenticated: (state) => {
      return state.isAuthenticated
    },
    getSections: (state) => {
      return state.sections
    }
  },
  mutations: {
    SET_IS_AUTHENTICATED (state, userState) {
      state.isAuthenticated = userState
    },
    SET_USER (state, user) {
      state.user = user
    },
    SET_SECTIONs (state, sections) {
      state.sections = sections
    }
  },
  actions: {
    setIsAuthenticated: (context, userState) => {
      context.commit('SET_IS_AUTHENTICATED', userState)
    },
    setUser: (context, user) => {
      context.commit('SET_USER', user)
    },
    SetSections: (context) => {
      const apiSectionsUrl = 'http://127.0.0.1:8000/api/sections/getSections'
      axios.get(apiSectionsUrl).then((response) => {
        const data = response.data
        context.commit('SET_SECTIONs', data)
      })
    }
  },
  modules: {

  }
})
