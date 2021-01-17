import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes, faLongArrowAltLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import  { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookSquare, faInstagram, faBars, faTimes, faLongArrowAltLeft, faHome);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
