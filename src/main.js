import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import VueMeta from "vue-meta";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faLongArrowAltLeft,
  faHome,
  faCalendarCheck
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faBandcamp,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFacebookSquare,
  faInstagram,
  faBandcamp,
  faSpotify,
  faBars,
  faTimes,
  faLongArrowAltLeft,
  faHome,
  faCalendarCheck
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  store,
  i18n,
  VueMeta,
  render: h => h(App)
}).$mount("#app");
