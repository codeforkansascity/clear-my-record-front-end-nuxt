# Server/Static Install

The steps are:

1. Checkout the develop branch
2. Make any adjustments in the code for the new environment, ie api url end point
3. Build the site, puts files in ./dist
4. Copy ./build to server

## Check out develop branch

Use git for this

## Make Adjustments

You will want to adjust the following in `nuxt.config.js`

```
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
         baseURL: 'http://127.0.0.1:5000'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: 'login', method: 'post', propertyName: 'data.token' },
                    user: { url: 'me', method: 'get', propertyName: 'data' },
                    logout:  { url: 'logout', method: 'post' },
```

## Build the site

```
npm run build
```

## Copy to server

You can sopy how ever you want

