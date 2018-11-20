import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        todos: [],
        questions: []
    },
    getters: {
        allQuestions (state) {
            return state.questions
        },
        getAnswer (state, question) {
            var index = state.questions.findIndex(p => p.question == question);
            if (index === -1 ) {
                return null;
            } else {
                return state.questions[index].answer;
            }
        },
        allTodos (state) {
            return state.todos
        },
        activeTodos (state) {
            return state.todos.filter(todo => !todo.completed)
        },
        completedTodos (state) {
            return state.todos.filter(todo => todo.completed)
        }
    },
    mutations: {

        STORE_QUESTION( state, question ){

            // var index = state.questions.findIndex(p => p.question == question.question);

            var index = state.questions.findIndex(p => p.question == question.question);




            if (index === -1 ) {
                state.questions.push(question)
            } else {
                state.questions[index].answer = question.answer;
            }

        },
        SET_TODOS (state, todos) {
            state.todos = todos
        },
        ADD_TODO (state, todo) {
            state.todos.push(todo)
        },
        REMOVE_TODO (state, todo) {
            var i = state.todos.indexOf(todo)
            state.todos.splice(i, 1)
        },
        FILTER_TODOS (state, value) {
            state.todos.forEach((todo) => {
                todo.completed = !value
            })
        }
    },
    actions: {
        storeQuestion ({ commit }, quest) {
            commit('STORE_QUESTION', quest)
        },



        addTodo ({ commit }, todo) {
            commit('ADD_TODO', todo)
        },
        setTodos ({ commit }, todos) {
            commit('SET_TODOS', todos)
        },
        removeTodo ({ commit }, todo) {
            commit('REMOVE_TODO', todo)
        },
        allDone ({ state, commit }) {
            var value = state.todos.filter(todo => todo.completed).length === state.todos.length
            commit('FILTER_TODOS', value)
        },
        saveTodos ({ state }) {
  //          axios.put('/api/todos', { todos: state.todos })
            console.log('Save to database');
        },
        nuxtServerInit ({ commit }, { req }) {
            commit('SET_TODOS', req.session ? (req.session.todos || []) : [])
        }
    }
})

export default store
