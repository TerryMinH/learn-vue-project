/*
 * @Author: TerryMin
 * @Date: 2022-01-14 11:40:18
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-01-14 17:27:55
 * @Description: file not
 */
import { createStore } from 'vuex'

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  text: ''
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment (state, preload) {
    console.log(state, preload);
    state.count++
  },
  decrement (state) {
    state.count--
  },
  handleInput (state, preload) {
    console.log(state, preload)
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }, preload) => commit('increment', preload),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  inputChange: ({ commit }, preload) => commit('handleInput', preload)
}

// getters are functions.
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations
})
