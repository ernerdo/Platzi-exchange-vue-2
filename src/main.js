import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chart from "chart.js";
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import "@/router";
import router from "./router";
import { dollarFilter, percentFilter } from "@/filters";
import i18n from "./i18n";

//import VueI18n from 'vue-i18n'

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
//Vue.use(VueI18n);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
