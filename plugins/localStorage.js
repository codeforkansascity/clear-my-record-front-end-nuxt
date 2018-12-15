// From https://github.com/robinvdvleuten/vuex-persistedstate
//    npm install vuex-persistedstate
//    In nuxt.config.js
//       plugins: [
//         { src: '~/plugins/localStorage.js', ssr: false }
//       ],
//
//    In store/index.js
import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState({
        key: 'vuex'
    })(store)
  })
}
