import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';     // From https://github.com/robinvdvleuten/vuex-persistedstate
import Cookies from "js-cookie";


Vue.use(Vuex)

const store = () => new Vuex.Store({
    plugins: [createPersistedState({
        namespace: 'cmr-app',
        initialState: {},
        //       expires: 7 * 24 * 60 * 60 * 1000,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, {expires: 365}),
            removeItem: key => Cookies.remove(key)
        }
    })],
    state: {
        // todos: [],
        questions: [],
        cases: [
            {"id": 1, "date": "6/30/1979", "agency": "MDC-Recept/Diag Ctr-Fulton", "case_number": "123987", "charges": [
                    {"id": 1, "type": "Felony", "class": "C", "citation": "569.080", "charge": "Tamp 1st W Serv of Utily"},
                    {"id": 2, "type": "Felony", "class": "C", "citation": "570.030", "charge": "Stealing"},
                    {"id": 3, "type": "Felony", "class": "C", "citation": "570.030", "charge": "Stealing"},
                ]},
            {"id": 2, "date": "7/13/1998", "agency": "MDC-Recept/Diag Ctr-Fulton", "case_number": "167890", "charges": [
                    {"id": 1, "type": "Felony", "class": "B", "citation": "195.211", "charge": "Tamp 1st W Serv of UtilyDist Del Manuf Contr Sub"}
                ]},
            {"id": 3, "date": "4/15/2003", "agency": "Kansas City PD", "case_number": "675849", "charges": [
                    {"id": 1, "type": "Felony", "class": "C", "citation": "195.202", "charge": "Poss Controlled Substance-Felony"}
                ]}
        ]
    },
    getters: {
        allQuestions(state) {
            return state.questions
        },
        allCases(state) {
            return state.cases
        },
        anyGroupQuestionsYes(state, group) {
            return state.questions.reduce(
                (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === group ? 1 : 0)
                , 0);

        },
        getAnswer(state, question) {
            var index = state.questions.findIndex(p => p.question == question);
            if (index === -1) {
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
        CLEAR_ALL(state) {
            //           state.questions = [];
        },
        STORE_QUESTION(state, data) {

            //   var group_index = state.questions.findIndex(p => p.group == data.group);

            var index = state.questions.findIndex(p => (p.group == data.group) && (p.question == data.question));

            if (index === -1) {
                state.questions.push(data)
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

        clearAll({commit}) {
            commit('CLEAR_ALL');
        },
        storeQuestion({commit}, quest) {
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
