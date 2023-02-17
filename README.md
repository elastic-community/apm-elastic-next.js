# English Version - Version Ingles
## How to add Elastic Search observability to your Next.js project [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This application was presented at the JSConf Chile workshop in 2023. We introduced an application that focuses on Chilean national parks using the Next.js technology with Server Side Render.

Let's prepare the project by running the following commands:

```sh
npm install
npx prisma generate
npm run dev
```


## Backend

Check that the package.json file has the execution scripts as they appear in the following snippet:
```js
{
  // ...
  "scripts": {
    "dev": "NODE_OPTIONS=--require=elastic-apm-node/start-next.js next dev",
    "build": "next build",
    "start": "NODE_OPTIONS=--require=elastic-apm-node/start-next.js next start",
    "lint": "next lint"
  },
  // ...
}
```

Now we must configure the environment variables with the Elastic Search values by editing the elastic-apm-node.js file:


```js


module.exports = {
    serverUrl: '<Replace By APM Server>',
    secretToken: '<Replace by Secret Token>',
    serviceName:"JsConf Chile - Backend"
  }
```
## Frontend

To configure the RUM agent in the project, you must modify the rum.js file with the following:
```js
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'frontend',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: '<Replace here by endpoint>,
  // Set service version (required for sourcemap feature)
  serviceVersion: '0.1'
})
export default apm
```



Happy codding and enjoy elastic search in your project

# Version Español - Spanish Version
## Como agregar observabilidad de elastic search a nuestro proyecto de next js [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Esta aplicación fue presentada en el workshop jsconf chile 2023 presentamos una aplicación que se enfoca en los parques nacionales de Chile utilizando la tecnología de Next JS usando Server Side Render

Preparemos el proyecto para lo que debes ejecutar los siguientes comandos:

```sh
npm install
npx prisma generate
npm run dev
```


## Backend

Verifica que el archivo package.json los script de ejecucion esten como aparece en el snippet

```js
{
  // ...
  "scripts": {
    "dev": "NODE_OPTIONS=--require=elastic-apm-node/start-next.js next dev",
    "build": "next build",
    "start": "NODE_OPTIONS=--require=elastic-apm-node/start-next.js next start",
    "lint": "next lint"
  },
  // ...
}
```

Ahora debemos configurar las variables de ambiente con los valores de elastic search editando el archivo 
elastic-apm-node.js

```js


module.exports = {
    serverUrl: '<Replace By APM Server>',
    secretToken: '<Replace by Secret Token>',
    serviceName:"JsConf Chile - Backend"
  }
```
## Frontend

Para configurar el agente de rum en el proyecto debes modificar el archivo rum.js con lo siguiente

```js
const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'frontend',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: '<Replace here by endpoint>,
  // Set service version (required for sourcemap feature)
  serviceVersion: '0.1'
})
export default apm
```
---
Authors:
  - Manuel Alba [https://github.com/elmalba]
  - Isac Silva [https://github.com/isilva]
---

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

Our projects are built with the mindset of open-source applications, using the MIT license.
