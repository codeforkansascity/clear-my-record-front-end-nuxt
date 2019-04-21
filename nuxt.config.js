const pkg = require('./package')

module.exports = {
    mode: 'spa',

    env: {
        apiPrefix: '',
    },

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: '/pdfmake.js'},
            {src: '/vfs_fonts.js'}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/scss/app.scss', // use our build, as entered via app.scss
        '@/css/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~plugins/vue-select', ssr: false}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/markdownit',
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        // Doc: https://bootstrap-vue.js.org/docs/
        // ['@nuxtjs/bootstrap-vue', {css: false}] // don't include a default build, use ours
        'bootstrap-vue/nuxt'
    ],
    bootstrapVue: {
        bootstrapCSS: 'css', // or `css`  - was false
        bootstrapVueCSS: 'bvCSS' // or `bvCSS`
    },
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        // baseURL: 'http://pdb-cmr-backend.test'
        // baseURL: 'http://127.0.0.1:5000'
        baseURL: 'https://cmr-app.codeforkc.org/api/'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'login', method: 'post', propertyName: 'data.token' },
                    user: { url: 'me', method: 'get', propertyName: 'data' },
                    logout:  { url: 'logout', method: 'post' },


                     // login: { url: 'http://pdb-cmr-backend.test/oauth/token', method: 'post', propertyName: 'access_token' },
                     // user: { url: 'http://pdb-cmr-backend.test/api/me', method: 'get', propertyName: 'data' },
                     // logout:  { url: 'logout', method: 'post' },
                }
            }
        }
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },
        vendor: ['vue-select']
    }
}
