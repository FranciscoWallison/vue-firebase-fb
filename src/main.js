import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false //("Você está executando o Vue no modo de desenvolvimento")

let app = ''

// Initialize Firebase criando o projeto Site
/**
 * Para a simplicidade do tutorial, vamos colocar a configuração Firebase no 
 * arquivo main.js, mas no sistema de produção real, evitar fazer isso e colocá-lo em um 
 * arquivo de configuração específico. Além disso, você pode ver no console alguns avisos do 
 * Firebase sobre apenas importar a parte do SDK que realmente usamos. Na produção, você 
 * definitivamente deveria fazer isso! Mas, novamente, para manter a simplicidade deste 
 * tutorial, pulo esta parte.
 */

let config = {
  apiKey: "AIzaSyDNj1RmR3XrQu0Xr8U1Ur11MUgF4WSknRE",
  authDomain: "crafrro.firebaseapp.com",
  databaseURL: "https://crafrro.firebaseio.com",
  projectId: "crafrro",
  storageBucket: "crafrro.appspot.com",
  messagingSenderId: "772351246272"
};
firebase.initializeApp(config);

/**
 * Agora, inicializamos o aplicativo somente quando tiver certeza de que o 
 * objeto Firebase Auth está pronto para uso.
 *  */

firebase.auth().onAuthStateChanged(() => {
  
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})


