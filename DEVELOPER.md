# Developer Notes

## Architechture
   
### Front End
   This is a [Nuxt/VueJS](https://nuxtjs.org/) Framework.
   To store data [VueX](https://vuex.vuejs.org/) is being used for local storage.
   
### Back End
   Backend work has started see  [codeforkansascity/clear_my_record_backend](https://github.com/codeforkansascity/clear_my_record_backend)

## Developer Setup

To setup Bootstrap to compile I used https://gist.github.com/benmccallum/33ff008660218a578fc27fd33f51d1c1

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Configuration

### API

Adjust the API endpoint host name in `nusxt.config.js`
```
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
      baseURL: 'http://localhost:3001/'
  },
```


# Notes and things we have bumped into.

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Packages used
* Markdown: https://www.npmjs.com/package/@nuxtjs/markdownit for markdown support.
* Axios: https://axios.nuxtjs.org/ for API support
* API Testing: https://github.com/typicode/json-server but put in a seperate project area.

### nuxtjs, vue-bootstrap with custom bootstrap build

Used instructions at https://gist.github.com/benmccallum/33ff008660218a578fc27fd33f51d1c1

### vue-select

[vue-select](https://sagalbot.github.io/vue-select/docs/)

[Why Your Third-Party Plugin Don’t Work in Nuxt and How to Fix it](https://medium.com/@codebeast_/why-your-third-party-plugin-dont-work-in-nuxt-and-how-to-fix-it-d1a8caadf422)

### Issue with using browser arrow keys.

VueX will not remember the data store if you use the browser arrow keys.
This is especaly true if you leave the single page app.  To demonstrate this:

1. Open a input page
2. Fill in some fields
3. Navigate using the Previous or Next page buttons
4. Naviagte back to to the page you fill in the fields using the Previous or Next page buttons
5. You will see values in the fields.
6. Close the window
7. Open the same input page as in step 1
8. There is no data in the fields.

The way to get around this is to use localstorage or cookies with the following
[GitHub - robinvdvleuten/vuex-persistedstate: Persist and rehydrate your Vuex state between page reloads.](https://github.com/robinvdvleuten/vuex-persistedstate)

#### Installing and Config


``````
npm install vuex-persistedstate
npm install js-cookie
``````

In Store/index.js

```
import createPersistedState from 'vuex-persistedstate';
import Cookies from "js-cookie";

Vue.use(Vuex)

const store = () => new Vuex.Store({
    plugins: [ createPersistedState({
        namespace: 'cmr-app',
        initialState: {},
        expires: 7 * 24 * 60 * 60 * 1000,
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value),
            removeItem: key => Cookies.remove(key)
        }
    }) ],
    state: {
        todos: [],

```


### `@nuxtjs/auth` for JWT

From https://scotch.io/tutorials/implementing-authentication-in-nuxtjs-app

Note: js-cookie might of already of been installed.
```
npm install @nuxtjs/auth
npm install js-cookie --save
npm install cookieparser --save
```

Add the following to nuxt.config.js

```
modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth'
],
axios: {
  baseURL: 'http://127.0.0.1:3333/api'
},

auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'login', method: 'post', propertyName: 'data.token' },
        user: { url: 'me', method: 'get', propertyName: 'data' },
        logout: false
      }
    }
  }
}


```
