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
        expires: 1,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, {expires: 365}),
            removeItem: key => Cookies.remove(key)
        }
    })],
    state: {
        apiUrlPrefix:'',  // '/api',     // Used infront of CRUD api calls.  /api
        client: {}
    },
    getters: {

        hasConvictions(state) {
            return state.client.convictions;
        }

        // allQuestions(state) {
        //     return state.questions
        // },
        // allPii(state) {
        //     return state.pii
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
            //state.cases = [];
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
        storeConvictionField(state, data) {

            const q = state.client.convictions[data.index];

            if (!q) {
                state.client.convictions.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        storeChargeField(state, data) {

            const q = state.client.convictions[data.conviction_index].charges[data.charge_index];

            if (!q) {
                state.client.convictions[data.conviction_index].charges.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        addConviction(state, data) {

            if ((typeof state.client['convictions'] === "undefined")) {
                state.client['convictions'] = [];
                state.client.convictions[0] = data;
            } else {
                state.client.convictions.push(data);
            }
        },
        addCharge(state, data) {

            if ((typeof state.client['convictions'].charges === "undefined")) {
                state.client['convictions'].charges = [];
                state.client.convictions[data.conviction_index].charges[0] = data.charge;
            } else {
                state.client.convictions[data.conviction_index].charges.push(data.charge);
            }
        },

        addBlankConviction(state) {

            if (!state.client.convictions) {
                state.client['convictions'] = [];
                state.client.convictions[0] = {
                    name: '',
                    arrest_date: '',
                    case_number: '',
                    agency: '',
                    court_name: '',
                    court_city_county: '',
                    name_of_judge: '',
                    your_name_in_case: '',
                    release_status: '',
                    release_date: '',
                    charges: [
                        {
                            charge: '',
                            citation: '',
                            class: '',
                            type: '',
                            sentence: '',
                            convicted: '',
                            eligible: '',
                            expunge: '',
                            note: '',
                        }
                    ]
                };
            }
        },

        STORE_CLIENT(state, data) {
            state.client = data;
        },

        SAVE_CLIENT_ID(state, new_id) {
            state.client.id = new_id;
        },

        SAVE_CONVICTION_ID(state, data) {
            state.client.convictions[data.index].id = data.id;
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
            await this.$axios.get(this.state.apiUrlPrefix  + '/clients/' + id)
                .then((res) => {
                    if (res.status === 200) {
                        if (!res.data.convictions) {
                            res.data['convictions'] = [];
                            res.data.convictions[0] = {
                                case_number: '',
                                arrest_date: '',
                                agency: '',
                                court_name: '',
                                court_city_county: '',
                                name_of_judge: '',
                                your_name_in_case: '',
                                release_status: '',
                                release_date: '',
                                charges: [
                                    {
                                        charge: '',
                                        citation: '',
                                        class: '',
                                        type: '',
                                        sentence: '',
                                        convicted: '',
                                        eligible: '',
                                        expunge: '',
                                        note: '',
                                    }
                                ]
                            };
                        }
                        commit('STORE_CLIENT', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },
        async addClient({commit}, data) {
            console.log('addClient -----');


            await this.$axios.post( this.state.apiUrlPrefix + '/clients', data)
                .then((res) => {
                    if (res.status === 200) {
                        commit('SAVE_CLIENT_ID', res.data.id)
                    } else {
                        console.log('error');
                    }
                })
        },
        async updateClient({commit}, data) {
            console.log('updateClient -----');

            if (data.convictions) {
                delete data.convictions;
            }

            await this.$axios.put(this.state.apiUrlPrefix + '/clients/' + data.id, data)
                .then((res) => {
                    if (res.status === 200) {

                    } else {
                        console.log('error');
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                });
        },

        async saveConviction({commit}, data) {
            console.log('saveConviction -----');

            if (data.id) {
                await this.$axios.put(this.state.apiUrlPrefix + '/convictions/' + data.id, data)
                    .then((res) => {
                        if (res.status === 200) {
                            console.log(res);
                        } else {
                            console.log('error with id');
                        }
                    }).catch(error => {
                        if (error.response) {
                            console.log(error.response);
                        }

                    });
            } else {
                await this.$axios.post(this.state.apiUrlPrefix + '/convictions', data)
                    .then((res) => {
                        if (res.status === 201) {
                            console.log(res);
                            commit('SAVE_CONVICTION_ID', { id: res.data.id, index: data.conviction_index });
                        } else {
                            console.log('error adding');
                        }
                    }).catch(error => {
                        if (error.response) {
                            console.log(error.response);
                        }
                    });
            }

        },

    },

})

export default store
