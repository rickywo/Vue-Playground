/**
 * Created by leeshihping on 1/11/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    projectName: []
  },
  mutations: {
    setName: (state, payload) => {
      state.projectName = payload
    }
  },
  actions: {
    SET_NAME: (context, payload) => {
      axios.get('https://reqres.in/api/users')
        .then(function (response) {
          console.log(response)
          context.commit('setName', response.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  getters: {
    projectName: state => state.projectName
  }
})

export default store
