// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueRouter from "vue-router";
import GullKit from "./plugins/gull.kit";

import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

//import material-icon scss
import "font-awesome/css/font-awesome.min.css";
import './config.js'
 
 
Vue.use(GullKit);
Vue.config.productionTip = false;

new Vue({
   data: {
      mode:"dark",
      userInfo:[],
      token:'',
      admin_token:'',
      login_open:"close",
      plan_open:"close2",
      search_tab:false,
      is_preview:false,
  },
  router,
  render: h => h(App)
}).$mount("#app");
