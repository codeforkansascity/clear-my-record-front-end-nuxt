const state = () => ({
    piis: [],
});

const getters = {
    allPiis(state) {
        return state.piis
    },
};

const mutations = {
    STORE_PII(state, data) {

        //   var group_index = state.piis.findIndex(p => p.group == data.group);

        var index = state.piis.findIndex(p => (p.question == data.question));
console.log(index);
        if (index === -1) {
            state.piis.push(data)
        } else {
            state.piis[index].answer = data.answer;
        }
    },
};

const actions = {
    storepii({commit}, quest) {
        commit('STORE_PII', quest)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
