import Vuex from 'vuex'

const createStore = () => {
  return new Store({
    state: {
      todos: []
    },

    getter: {
      TODOS: state => {
        return state.todos
      }
    },

    mutations: {
      ADD_TODO: (state, payload) => {
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
