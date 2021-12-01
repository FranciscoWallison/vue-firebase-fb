import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false //("Você está executando o Vue no modo de desenvolvimento")

let app = ''

// Initialize Firebase criando o projeto Site
/**
 * Adicionar o Firebase ao seu aplicativo da Web
 * SUAS CONFIGURAÇÕES DO FIREBASE
 */  
  var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
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


