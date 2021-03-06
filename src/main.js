import Vue from "vue";
import App from "./App.vue";
import "./plugins/vuetify";
import router from "./router";
import "./utils/globalComponents";
import "./utils/formValidation";
import "./plugins";
import store from "./store";  
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
