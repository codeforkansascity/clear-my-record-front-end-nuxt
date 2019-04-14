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
        allCases(state) {
            console.log(state.client.cases);
            return state.client.cases;
        },
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
        addConviction(state, data) {
console.log(typeof state.client['cases']);

            data['charges'] = [];
            if ((typeof state.client['cases'] === "undefined"))
            {
                console.log('FFFFF');
                state.client['cases'] = [];
                state.client.cases[0] = data;
            } else {
                state.client.cases.push(data);
            }
        },
       //  addCharge(state, data) {
       //      state.cases[data.case_index].charges.push(data.charge);
       //  },
       //
        STORE_CLIENT(state, data) {
            state.client = data;
        },

        SAVE_CLIENT_ID(state, new_id) {
            state.client.id = new_id;
        },

        storeClientField(state, payload) {
            state.client[payload.field] = payload.value;
        },

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


        async getClient({commit}, id) {
            console.log('getClient');
            await this.$axios.get('/api/clients/' + id)
                .then((res) => {
                    if (res.status === 200) {
                        commit('STORE_CLIENT', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },
        async addClient({commit}, data) {
            console.log('addClient -----');
            await this.$axios.post('/api/clients',data)
                .then((res) => {
                    if (res.status === 201) {
                        commit('SAVE_CLIENT_ID', res.data.id)
                    } else {
                        console.log('error');
                    }
                })
        },
        async updateClient({commit}, data) {
            console.log('updateClient -----');

            await this.$axios.patch('/api/clients/'+data.id,data)
                .then((res) => {
                    if (res.status === 200) {

                    } else {
                        console.log('error');
                    }
                })
        },
    },

})

export default store
