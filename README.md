## Como Instalar el proyecto

Ejecutar `yarn install`

## Como Ejecutar el proyecto

Ejecutar `yarn start`

La aplicacion tiene 3 rutas:

- / -> Login
- /users -> lista de usuarios: se decidio hacerlo con cards y no tabla (mas responsive)
- /user/:id -> detalle de un usuario

## como Ejecutar tests

Ejecutar `yarn test`

apenas se hicieron un par de tests basicos por motivos de tiempo, utilizando jest enzyme

## ejecutar lint

Ejecutar `yarn code:lint`

Se utilizo eslint configurado para typescript

## ejecutar formateo de codigo

Ejecutar `yarn code:format`

Se utilizo prettier

## git hooks

Se configuraron hook para pre-commit (prettier) y pre-push (lint & tests)

## tecnologias Utilizadas

- react
- redux
- redux thunk y redux promise middleware: se decidio utilizar como redux middlewares thunk y redux-promise para manejo de llamadas asincronas a apis. A pesar de que conozco
  tambien redux-sagas, pero lo considero over-engineering para la mayoria de los proyectos
- typescript: decidi utilizar typescript como una opcion de tipado mas completa que PropTypes, permitiendo tipar no solo render props
- react-router
- styled-components: basicamente para estilar componentes muy especificos
- semantic-ui-react: libreria muy completa de componentes UI, opte por no crear los ui components desde cero con styled components
- axios: para llamadas a apis
- uso de hooks de react, redux y react-router

## Login

Se habilito un usuario `prueba` para poder hacer login

## ESTA APLICACION FUE CREADA CON CREATE-REACT-APP con opcion Typescript
