
# Developer Notes

## nuxtjs, vue-bootstrap with custom bootstrap build

Used instructions at https://gist.github.com/benmccallum/33ff008660218a578fc27fd33f51d1c1

## Issue with using browser arrow keys.

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

### Installing and Config


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
