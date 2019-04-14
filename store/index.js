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
               expires: .01,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, {expires: 365}),
            removeItem: key => Cookies.remove(key)
        }
    })],
    state: {
        // todos: [],
        cases: [],
        client: {}
    },
    getters: {
        // allQuestions(state) {
        //     return state.questions
        // },
        // allPii(state) {
        //     return state.pii
        // },
        // allCases(state) {
        //     return state.cases
        // },
        // anyGroupQuestionsYes(state, group) {
        //     return state.questions.reduce(
        //         (accumulator, item) => accumulator += (item.answer === 'Yes' && item.group === group ? 1 : 0)
        //         , 0);
        //
        // },
        // getAnswer(state, question) {
        //     var index = state.questions.findIndex(p => p.question == question);
        //     if (index === -1) {
        //         return null;
        //     } else {
        //         return state.questions[index].answer;
        //     }
        // }


    },
    mutations: {
        CLEAR_ALL(state) {
            // state.questions = [];
            // state.pii = [];
            state.cases = [];
            state.client = {};
        },
       //  STORE_QUESTION(state, data) {
       //
       //      //   var group_index = state.questions.findIndex(p => p.group == data.group);
       //
       //      var index = state.questions.findIndex(p => (p.group == data.group) && (p.question == data.question));
       //
       //      if (index === -1) {
       //          state.questions.push(data)
       //      } else {
       //          state.questions[index].answer = data.answer;
       //      }
       //  },
       //  storePii(state, data) {
       //
       //      var index = state.pii.findIndex(p => (p.question == data.question));
       //
       //      if (index === -1) {
       //          state.pii.push(data)
       //      } else {
       //          state.pii[index].value = data.value;
       //      }
       //
       //  },
       // storeCaseField(state, data) {
       //
       //      const q = state.cases[data.index];
       //
       //      if (!q) {
       //          state.cases.push(data)
       //      } else {
       //          q[data.field] = data.value;
       //      }
       //
       //  },
       //  storeChargeField(state, data) {
       //
       //      const q = state.cases[data.case_index].charges[data.charge_index];
       //
       //      if (!q) {
       //          state.cases[data.case_index].charges.push(data)
       //      } else {
       //          q[data.field] = data.value;
       //      }
       //
       //  },
       //  addCase(state, data) {
       //      state.cases.push(data);
       //  },
       //  addCharge(state, data) {
       //      state.cases[data.case_index].charges.push(data.charge);
       //  },
       //
       //  addClientIntake(state, data) {
       //      state.client = data;
       //  },
       //  storeClientField(state, payload) {
       //
       //      console.log('storeClientField ' + payload.field + '|' + payload.value);
       //      state.client[payload.field] = payload.value;
       //
       //  },
       //  saveClientId(state, new_id) {
       //      state.client.id = new_id;
       //  },

    },
    actions: {

        clearAll({commit}) {
            commit('CLEAR_ALL');
        },
        // storeQuestion({commit}, quest) {
        //     commit('STORE_QUESTION', quest)
        // },

        // async addClient({commit}) {
        //     console.log('addClient');
        //     commit('ADD_CLIENT');
        //
        // },
        async getClientIntake({commit}, client_id) {
            console.log('getClientIntake');
            await this.$axios.get('/api/clients/' + client_id)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                        commit('addClientIntake', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },
        async addClientInfo({commit}, data) {
            console.log('addClientInfo -----');
            await this.$axios.post('/api/clients',data)
                .then((res) => {
                    if (res.status === 201) {
                        console.log(res);
                        commit('saveClientId', res.data.id)
                    } else {
                        console.log('error');
                    }
                })
        },
        async updateClientInfo({commit}, data) {
            console.log('updateClientInfo -----');

            await this.$axios.patch('/api/clients/'+data.id,data)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                    } else {
                        console.log('error');
                    }
                })
        },
    },

})

export default store
