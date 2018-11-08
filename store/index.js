import Vuex from 'vuex'

const store = () => {
    return new Vuex.Store({
        state: {
            counter: 0
        },
        mutations: {
            increment (state) {
                state.counter++
            },

        }
    })
}

export default store
