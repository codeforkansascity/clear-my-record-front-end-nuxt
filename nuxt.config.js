const pkg = require('./package')

module.exports = {
    mode: 'spa',

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
        // baseURL: 'http://localhost:5000/'
        // baseURL: 'http://localhost:3001/'
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
