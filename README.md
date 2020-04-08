# find-places-app
React Native app to find locations near you.

Este App exibe os locais mais próximos do usuário em formato de mapa e lista. O usuário da aplicação pode ainda entrar com uma conta já existente ou cadastrar uma nova conta.

A aplicação tem as funcionalidades de visualizar perfil, editar perfil e logout.

Para a integração da autenticação e perfil foi utilizada a API REST do REQ|RES
(https://reqres.in/).

A busca de locais próximos ao usuário foi feita através da API REST do Google Places
(https://cloud.google.com/maps-platform/places/).

### Para executar o projeto, faça:

npm i

Adicione a chave do google places em:

android/app/src/main/AndroidManifest.xml
android:value="YOUR_KEY"


src/config/Constants.js
export const apiKey = 'YOUR_KEY';


npx react-native run-android

npx react-native start



![GIF-200408_040616](https://user-images.githubusercontent.com/11843751/78762556-606d1300-795a-11ea-9b23-e2effb51a6fd.gif)
