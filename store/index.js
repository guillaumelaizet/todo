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
      },

      DELETE_TASK : (state, payload) => {
        let task = state.todos.findIndex(todo => todo.id === payload)
        console.log('task ' + task)
        state.todos.splice(task, 1)
      }
    },

    actions: {
      SAVE_TODO : (context, payload) => {
        context.commit('ADD_TODO', payload)
      },

      DELETE_TASK : (context, payload) => {
        context.commit('DELETE_TASK', payload)
      }
    }
  })
}

export default createStore
