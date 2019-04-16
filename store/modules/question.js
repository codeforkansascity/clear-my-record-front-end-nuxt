const state = () => ({
    questions: [],
});

const getters = {
    allQuestions(state) {
        return state.questions
    },
};

const mutations = {
    STORE_QUESTION(state, data) {

        //   var group_index = state.questions.findIndex(p => p.group == data.group);

        var index = state.questions.findIndex(p => (p.group == data.group) && (p.question == data.question));

        if (index === -1) {
            state.questions.push(data)
        } else {
            state.questions[index].answer = data.answer;
        }
    },
};

const actions = {
    storeQuestion({commit}, quest) {
        commit('STORE_QUESTION', quest)
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
