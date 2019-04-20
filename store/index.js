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
        apiUrlPrefix:'/api',  // '/api',     // Used infront of CRUD api calls.  /api
        client: {},
        convictions: []
    },
    getters: {

        hasConvictions(state) {
            return state.convictions;
        },
        allCases(state) {
            return state.convictions;
        },
        chargesForConviction: (state) => (conviction_offset) => {
            return state.convictions[conviction_offset].charges;
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
            state.convictions = [];
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
            console.log(data);
            const q = state.convictions[data.index];

            if (!q) {
                state.convictions.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        storeChargeField(state, data) {
            console.log(storeChargeField);
            console.log(data);
            const q = state.convictions[data.conviction_index].charges[data.charge_index];

            if (!q) {
                state.convictions[data.conviction_index].charges.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        addConviction(state, data) {

                state.convictions.push(data);
        },
        addCharge(state, data) {
            console.log('addCharge');
            console.log(data);

            if ((typeof state.convictions.charges === "undefined")) {
                console.log('adding');
                Vue.set(state.convictions, 'charges', []);
            }
            state.convictions[data.conviction_index].charges.push(data.charge);
        },

        addBlankConviction(state) {

//            if (!state.t.convictions) {
//                state.client['convictions'] = [];
//                state.client.convictions[0] = {
//                    name: '',
//                    arrest_date: '',
//                    case_number: '',
//                    agency: '',
//                    court_name: '',
//                    court_city_county: '',
//                    judge: '',
//                    record_name: '',
//                    release_status: '',
//                    release_date: '',
//                    charges: [
//                        {
//                            charge: '',
//                            citation: '',
//                            class: '',
//                            type: '',
//                            sentence: '',
//                            convicted: '',
//                            eligible: '',
//                            expunge: '',
//                            note: '',
//                        }
//                    ]
//                };
//            }
        },

        STORE_CLIENT(state, data) {
            state.client = data;
        },

        SAVE_CLIENT_ID(state, new_id) {
            state.client.id = new_id;
        },

        SAVE_CONVICTION_ID(state, data) {
            state.convictions[data.index].id = data.id;
        },

        storeClientField(state, payload) {
            state.client[payload.field] = payload.value;
        },

    },

// ==========================
// ACTIONS
// ==========================

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
                        commit('STORE_CLIENT', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },


        // ---------------------------------------------
        // CLIENT
        // ---------------------------------------------

        async addClient({commit}, data) {
            console.log('addClient -----');

            // Need to remove convictions

            // This code works in updateClient() just below
            // if (data.convictions) {
            //     delete data.convictions;
            // }

            // remove/delete convictions from client object on add

            let payload = {};
            for (var property in data) {
                if (data.hasOwnProperty(property)) {
                    switch (property) {
                        case 'convictions':
                            break;
                        // case 'dob':
                        //     if ( data.dob ) {
                        //         payload[property] = data[property];
                        //     }
                        //     break;
                        // case 'license_expiration_date':
                        //     if ( data.license_expiration_date ) {
                        //         payload[property] = data[property];
                        //     }
                        //     break;

                        default:
                            payload[property] = data[property];
                            break;

                    }
                }
            }

            console.log(payload);

            await this.$axios.post( this.state.apiUrlPrefix + '/clients', payload)
                .then((res) => {
                    if (res.status === 200) {
                        commit('SAVE_CLIENT_ID', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },

        async updateClient({commit}, data) {
            console.log('updateClient -----');


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

        // ---------------------------------------------
        // CONVICTION
        // ---------------------------------------------

        async saveConviction({commit}, payload) {
            console.log('action   saveConviction');

            if (payload.id) {
                await this.$axios.put(this.state.apiUrlPrefix + '/convictions/' + payload.data.id, payload.data)
                    .then((res) => {
                        if (res.status === 201) {
                            console.log(res);
                        } else {
                            console.log('error with id');
                        }
                    }).catch(error => {
                        console.log('saveConviction update error:');
                        if (error.response) {
                            console.log('saveConviction update error:' + error.response);
                        }

                    });
            } else {
                let new_id = await this.$axios.post(this.state.apiUrlPrefix + '/clients/' + payload.client_id + '/convictions', payload.data)
                    .then((res) => {
                        if (res.status === 200) {
                            return res.data;
                        } else {
                            return null;
                        }
                    }).catch(error => {
                        console.log('saveConviction add error 88:');

                        if (error.response) {
                            console.log('saveConviction add error:' + error.response);
                        }
                        return null;
                    });

                if (new_id) {
                    commit('SAVE_CONVICTION_ID', {id: new_id, index: payload.conviction_index});
                }

            }

        },

    },

})

export default store
