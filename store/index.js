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
        apiUrlPrefix: '/api',  // '/api',     // Used infront of CRUD api calls.  /api
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

// ==============================
// MUTATIONS
// ==============================
    mutations: {
        CLEAR_ALL(state) {
            // state.questions = [];
            // state.pii = [];
            //state.cases = [];
            // state.client = {};
            // state.convictions = [];

            Vue.set(state, 'client', {});
            Vue.set(state, 'convictions', []);
        },

        // ---------------------------------------
        // CLIENT
        // ---------------------------------------
        STORE_CLIENT(state, data) {
            console.log('mutation STORE_CLIENT');

            Vue.set(state, 'client', data);
            console.log('mutation STORE_CLIENT exit');
        },

        SAVE_CLIENT_ID(state, new_id) {
            state.client.id = new_id;
        },


        storeClientField(state, payload) {
            state.client[payload.field] = payload.value;
        },

        // ---------------------------------------
        // CONVICTION
        // ---------------------------------------

        STORE_CLIENT_CONVICTIONS(state, data) {
            console.log('mutation STORE_CLIENT_CONVICTIONS');

            Vue.set(state, 'convictions', data);

            console.log('mutation STORE_CLIENT_CONVICTIONS  exit');
            // state.client = data;
        },

        storeConvictionField(state, data) {
            console.log(data);
            const q = state.convictions[data.index];

            if (!q) {
                state.convictions.push(data)
            } else {
                q[data.field] = data.value;
            }

        },

        addConviction(state, data) {

            state.convictions.push(data);
        },

        SAVE_CONVICTION_ID(state, data) {
            console.log('SAVE_CONVICTION_ID');
            state.convictions[data.index].id = data.id;
            console.log('SAVE_CONVICTION_ID exit');
        },

        DELETE_CONVICTION(state, payload) {
            state.convictions.splice([payload.conviction_index], 1);
        },

        // ---------------------------------------
        // CHARGE
        // ---------------------------------------

        storeChargeField(state, data) {
            console.log('storeChargeField');
            console.log(data);
            const q = state.convictions[data.conviction_index].charges[data.charge_index];

            if (!q) {
                state.convictions[data.conviction_index].charges.push(data)
            } else {
                q[data.field] = data.value;
            }

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

        SAVE_CHARGE_ID(state, data) {
            console.log('SAVE_CHARGE_ID');
            console.log(data);

            state.convictions[data.index].charges[data.charge_index].id = data.id;
        },

        DELETE_CHARGE(state, payload) {
            state.convictions[payload.conviction_index].charges.splice(payload.charge_index, 1);
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
//                            please_expunge: '',
//                            notes: '',
//                        }
//                    ]
//                };
//            }
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


        // ---------------------------------------------
        // CLIENT
        // ---------------------------------------------

        async getClient({commit}, id) {
            console.log('getClient');
            await this.$axios.get(this.state.apiUrlPrefix + '/clients/' + id)
                .then((res) => {
                    if (res.status === 200) {
                        commit('STORE_CLIENT', res.data)
                    } else {
                        console.log('error');
                    }
                }).catch(error => {

                    if (error.response) {
                        alert('aaaaa ' + error.response.data.message);
                    } else {
                        alert('aaaaa ' + error);
                    }
                    return false;
                });

            console.log('getClient  exit');
        },

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

            await this.$axios.post(this.state.apiUrlPrefix + '/clients', payload)
                .then((res) => {
                    if (res.status === 200) {
                        commit('SAVE_CLIENT_ID', res.data)
                    } else {
                        console.log('error');
                    }
                }).catch(error => {

                    if (error.response) {
                        alert('aaaaa ' + error.response.data.message);
                    } else {
                        alert('aaaaa ' + error);
                    }
                    return false;
                });
        },

        async updateClient({commit}, data) {
            console.log('updateClient -----');

            let ret = false;
            ret = await this.$axios.put(this.state.apiUrlPrefix + '/clients/' + data.id, data)
                .then((res) => {
                    if (res.status === 200) {
                        return true;
                    } else {
                        alert(res.status);
                        return false;
                    }
                }).catch(error => {

                    if (error.response) {
                        alert('aaaaa ' + error.response.data.message);
                    } else {
                        alert('aaaaa ' + error);
                    }
                    return false;
                });

            return ret;
        },

        // ---------------------------------------------
        // CONVICTION
        // ---------------------------------------------

        async getClientConvictions({commit}, id) {
            console.log('getClientConvictions');
            await this.$axios.get(this.state.apiUrlPrefix + '/clients/' + id + '/convictions')
                .then((res) => {
                    if (res.status === 200) {

                        console.log(res.data);

                        commit('STORE_CLIENT_CONVICTIONS', res.data)
                    } else {
                        console.log('error');
                    }
                }).catch(error => {

                    if (error.response) {
                        alert('aaaaa ' + error.response.data.message);
                    } else {
                        alert('aaaaa ' + error);
                    }
                    return false;
                });

            console.log('getClientConvictions exit');
        },


        async saveConviction({commit}, payload) {
            console.log('action   saveConviction');

            let ret = false;
            if (payload.data.id) {
                ret = await this.$axios.put(this.state.apiUrlPrefix + '/convictions/' + payload.data.id, payload.data)
                    .then((res) => {
                        if (res.status === 200 || res.status === 201) {
                            return true;
                        } else {
                            console.log('action   saveConviction status =' + res.status);
                            return false;
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });
            } else {
                let new_id = await this.$axios.post(this.state.apiUrlPrefix + '/clients/' + payload.client_id + '/convictions', payload.data)
                    .then((res) => {
                        if (res.status === 200) {
                            return res.data;
                        } else {
                            console.log('action   saveConviction status:' + res.status);
                            return false;
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });

                if (new_id) {
                    await commit('SAVE_CONVICTION_ID', {id: new_id, index: payload.conviction_index});
                    ret = true;
                } else {
                    ret = false;
                }
            }

            console.log('action   saveConviction END ret=' + ret);

            return ret;


        },
        async removeConviction({commit}, payload) {
            console.log('action   removeConviction');

            if (payload.conviction_id) {
                await this.$axios.delete(this.state.apiUrlPrefix + '/convictions/' + payload.conviction_id)
                    .then((res) => {
                        if (res.status === 200 || res.status === 201) {
                            console.log(res);
                        } else {
                            console.log('error with id');
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });
            }

            commit('DELETE_CONVICTION', {conviction_index: payload.conviction_index});

        },


        // ---------------------------------------------
        // CHARGE
        // ---------------------------------------------

        async getClientConvictionCharges({commit}, payload) {
            console.log('getClientConvictionCharges ' + payload.conviction_id);
            console.log(payload);


            await this.$axios.get(this.state.apiUrlPrefix + '/clients/' + payload.client_id + '/convictions/' + payload.conviction_id)
                .then((res) => {
                    if (res.status === 200) {

                        console.log(res.data);

                        commit('STORE_CLIENT_CONVICTION_CHARGES', res.data)
                    } else {
                        console.log('error');
                    }
                }).catch(error => {

                    if (error.response) {
                        alert('aaaaa ' + error.response.data.message);
                    } else {
                        alert('aaaaa ' + error);
                    }
                    return false;
                });

            console.log('getClientConvictionCharges  end ' + payload.conviction_id);


        },

        async saveCharge({commit}, payload) {
            console.log('action   saveCharge');
            console.log(payload);

            let ret = false;
            if (payload.data.id) {
                ret = await this.$axios.put(this.state.apiUrlPrefix + '/charges/' + payload.data.id, payload.data)
                    .then((res) => {
                        if (res.status === 200 || res.status === 201) {
                            return true;
                        } else {
                            console.log('action   saveCharge status =' + res.status);
                            return false;
                            ;
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });
            } else {
                let new_id = await this.$axios.post(this.state.apiUrlPrefix +
                    '/clients/' + payload.client_id +
                    '/convictions/' + payload.conviction_id +
                    '/charges', payload.data)
                    .then((res) => {
                        if (res.status === 200) {
                            return res.data;
                        } else {
                            console.log('action   saveCharge status:' + res.status);
                            return false;
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });

                if (new_id) {
                    await commit('SAVE_CHARGE_ID', {
                        id: new_id,
                        index: payload.conviction_index,
                        charge_index: payload.charge_index
                    });
                    ret = true;
                } else {
                    ret = false;
                }
            }
            console.log('action   saveCharge END ret=' + ret);

            return ret;
        },

        async removeCharge({commit}, payload) {
            console.log('action   removeCharge');

            if (payload.charge_id) {
                await this.$axios.delete(this.state.apiUrlPrefix + '/charges/' + payload.charge_id)
                    .then((res) => {
                        if (res.status === 201) {
                            console.log(res);
                        } else {
                            console.log('error with id');
                        }
                    }).catch(error => {

                        if (error.response) {
                            alert('aaaaa ' + error.response.data.message);
                        } else {
                            alert('aaaaa ' + error);
                        }
                        return false;
                    });
            }

            commit('DELETE_CHARGE', {conviction_index: payload.conviction_index, charge_index: payload.charge_index});

        },
    },


})

export default store
