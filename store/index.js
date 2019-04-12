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
               expires: 10 * 60 * 1000,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, {expires: 365}),
            removeItem: key => Cookies.remove(key)
        }
    })],
    state: {
        // todos: [],
        questions: [],
        pii: [],
        cases: [
            {"id": 1, "arrested_on": "6/30/1979", "agency": "MDC-Recept/Diag Ctr-Fulton", "court_id": "MO948103J", "court_name": "Jackson Co Cir Crt-Kansas City", "case_number": "CR8749999B",

                "release_status": "complete release", "release_date": "6/30/1989", "note": "",
                "charges": [
                    {"id": 1, "type": "Felony", "class": "C", "citation": "569.080", "charge": "Tamp 1st W Serv of Utily",
                        "sentence": "Confinement 2 years", "eligible": true, "expunge": false, "note": ""},
                    {"id": 2, "type": "Felony", "class": "C", "citation": "570.030", "charge": "Stealing",
                        "sentence": "Confinement 2 years", "eligible": false, "expunge": false, "note": ""},
                    {"id": 3, "type": "Felony", "class": "C", "citation": "570.030", "charge": "Stealing",
                        "sentence": "Confinement 2 years", "eligible": false, "expunge": false, "note": ""},
                ]},
            {"id": 2, "arrested_on": "7/13/1998", "agency": "MDC-Recept/Diag Ctr-Fulton", "court_id": "MO948103J", "court_name": "Jackson Co Cir Crt-Kansas City", "case_number": "CR8749888C",
                "release_status": "complete release", "release_date": "6/9/2004", "note": "",
                "charges": [
                    {"id": 1, "type": "Felony", "class": "B", "citation": "195.211", "charge": "Dist Del Manuf Contr Sub",
                        "sentence": "Confinement 5 years", "eligible": true, "expunge": false, "note": ""},
                ]},
            {"id": 3, "arrested_on": "4/15/2003", "agency": "Kansas City PD", "court_id": "MO948103J", "court_name": "Jackson Co Cir Crt-Kansas City", "case_number": "CR874111e",
                "release_status": "", "release_date": "", "note": "",
                "charges": [
                    {"id": 1, "type": "Felony", "class": "C", "citation": "195.202", "charge": "Poss Controlled Substance-Felony",
                        "sentence": "Confinement 3 years suspended, probation 3 years 1/24/2006", "eligible": true, "expunge": false, "note": ""},
                ]}
        ]
    },
    getters: {
        allQuestions(state) {
            return state.questions
        },
        allPii(state) {
            return state.pii
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
    },
    mutations: {
        CLEAR_ALL(state) {
            state.questions = [];
            state.pii = [];
            state.cases = [];
            state.client = {};
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
        storePii(state, data) {

            var index = state.pii.findIndex(p => (p.question == data.question));

            if (index === -1) {
                state.pii.push(data)
            } else {
                state.pii[index].value = data.value;
            }

        },
       storeCaseField(state, data) {

            const q = state.cases[data.index];

            if (!q) {
                state.cases.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        storeChargeField(state, data) {

            const q = state.cases[data.case_index].charges[data.charge_index];

            if (!q) {
                state.cases[data.case_index].charges.push(data)
            } else {
                q[data.field] = data.value;
            }

        },
        addCase(state, data) {
            state.cases.push(data);
        },
        addCharge(state, data) {
            state.cases[data.case_index].charges.push(data.charge);
        },

        addClientIntake(state, data) {
            state.client = data;
        },
        storeClientField(state, payload) {

            console.log('storeClientField ' + payload.field + '|' + payload.value);
            state.client[payload.field] = payload.value;

        },

    },
    actions: {

        clearAll({commit}) {
            commit('CLEAR_ALL');
        },
        storeQuestion({commit}, quest) {
            commit('STORE_QUESTION', quest)
        },

        async getClientIntake({commit}, client_id) {
            console.log('getClientIntake');
            await this.$axios.get('http://127.0.0.1:5000/clients/' + client_id)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res);
                        commit('addClientIntake', res.data)
                    } else {
                        console.log('error');
                    }
                })
        },
    },

})

export default store
