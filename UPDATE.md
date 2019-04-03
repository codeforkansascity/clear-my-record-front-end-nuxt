# Quick update notes

## Update `node_modules`

```
npm install
npm run dev
```

## Install a test JWT Server
 
 ```
 git clone https://github.com/ammezie/jwt-auth-api.git
 cd jwt-auth-api/
 npm install
 cp .env.example .env
 vi .env   <=== SET APP_KEY=pXva2MQZ6aVGX/by+9rKDw71avlK6XwgZ6wCahjGlfo=
 npm start
 ```
 
 Should have a JWT server runing on http://127.0.0.1:3333
 
 Login and Click Login, then register.  
 


## Configure API Host


At this point the qualifying questions will not work.

Adjust the API endpoint hostname in `nusxt.config.js`
```
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
      baseURL: 'http://localhost:3001/'
  },
```


## Testing API

Install and use [json-server](ps://github.com/typicode/json-serverps://github.com/typicode/json-server)

 
