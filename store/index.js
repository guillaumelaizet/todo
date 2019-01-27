import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      tasker: ['Guillaume', 'Quentin', 'Marie']
    },

    getters: {
      TODOS: state => {
        return state.todos
      },

      TASKERS: state => {
        return state.tasker
      }
    },

    mutations: {
      ADD_TODO : (state, payload) => {
        state.todos.push(payload)
      }
    },

    actions: {
      SAVE_TODO : (context, payload) => {
        context.commit('ADD_TODO', payload)
      }
    }
  })
}

export default createStore
