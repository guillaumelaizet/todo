import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      task: {},
      tasker: ['Guillaume', 'Quentin', 'Marie']
    },

    getters: {
      TODOS: state => {
        return state.todos
      },

      TASK: state => {
        return state.task
      },

      TASKERS: state => {
        return state.tasker
      }
    },

    mutations: {
      ADD_TODO : (state, payload) => {
        state.todos.push(payload)
      },

      GET_TASK : (state, payload) => {
        console.log('payload ' + payload)
        let task = state.todos.findIndex(todo => todo.id === payload)
        state.task = state.todos[task]
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

      GET_TASK : (context, payload) => {
        context.commit('GET_TASK', payload)
      },

      DELETE_TASK : (context, payload) => {
        context.commit('DELETE_TASK', payload)
      }
    }
  })
}

export default createStore
