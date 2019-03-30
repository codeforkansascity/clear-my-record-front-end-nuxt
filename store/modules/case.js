const state = () => ({
    cases: [],
});

const getters = {
    allCases(state) {
        return state.cases
    },
};

const mutations = {
    STORE_CASE(state, data) {

        //   var group_index = state.cases.findIndex(p => p.group == data.group);

        var index = state.cases.findIndex(p => (p.case == data.case));

        if (index === -1) {
            state.cases.push(data)
        } else {
            state.cases[index].answer = data.answer;
        }
    },
};

const actions = {
    storeCase({commit}, quest) {
        commit('STORE_CASE', quest)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
