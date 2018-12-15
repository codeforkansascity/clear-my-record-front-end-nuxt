import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';     // From https://github.com/robinvdvleuten/vuex-persistedstate
import Cookies from "js-cookie";


Vue.use(Vuex)

const store = () => new Vuex.Store({
    plugins: [ createPersistedState({
        namespace: 'cmr-app',
        initialState: {},
 //       expires: 7 * 24 * 60 * 60 * 1000,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 365 } ),
            removeItem: key => Cookies.remove(key)
        }
    }) ],
    state: {
        // todos: [],
        questions: []
    },
    getters: {
        allQuestions (state) {
            return state.questions
        },
        anyGroupQuestionsYes (state, group) {
            return state.questions.reduce(
                (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === group ? 1 : 0)
            , 0);

        },
        getAnswer (state, question) {
            var index = state.questions.findIndex(p => p.question == question);
            if (index === -1 ) {
                return null;
            } else {
                return state.questions[index].answer;
            }
        },
        // allTodos (state) {
        //     return state.todos
        // },
        // activeTodos (state) {
        //     return state.todos.filter(todo => !todo.completed)
        // },
        // completedTodos (state) {
        //     return state.todos.filter(todo => todo.completed)
        // }
    },
    mutations: {
        CLEAR_ALL( state ){
 //           state.questions = [];
        },
        STORE_QUESTION( state, data ){

          //   var group_index = state.questions.findIndex(p => p.group == data.group);

            var index = state.questions.findIndex(p => (p.group == data.group) && (p.question == data.question) );

            if (index === -1 ) {
                state.questions.push( data )
            } else {
                state.questions[index].answer = data.answer;
            }
        },
        // SET_TODOS (state, todos) {
        //     state.todos = todos
        // },
        // ADD_TODO (state, todo) {
        //     state.todos.push(todo)
        // },
        // REMOVE_TODO (state, todo) {
        //     var i = state.todos.indexOf(todo)
        //     state.todos.splice(i, 1)
        // },
        // FILTER_TODOS (state, value) {
        //     state.todos.forEach((todo) => {
        //         todo.completed = !value
        //     })
        // }
    },
    actions: {

        clearAll( { commit} ) {
            commit('CLEAR_ALL');
        },
        storeQuestion ({ commit }, quest) {
            commit('STORE_QUESTION', quest)
        },
  //       addTodo ({ commit }, todo) {
  //           commit('ADD_TODO', todo)
  //       },
  //       setTodos ({ commit }, todos) {
  //           commit('SET_TODOS', todos)
  //       },
  //       removeTodo ({ commit }, todo) {
  //           commit('REMOVE_TODO', todo)
  //       },
  //       allDone ({ state, commit }) {
  //           var value = state.todos.filter(todo => todo.completed).length === state.todos.length
  //           commit('FILTER_TODOS', value)
  //       },
  //       saveTodos ({ state }) {
  // //          axios.put('/api/todos', { todos: state.todos })
  //           console.log('Save to database');
  //       },
  //       nuxtServerInit ({ commit }, { req }) {
  //           commit('SET_TODOS', req.session ? (req.session.todos || []) : [])
  //       }
    }
})

export default store
