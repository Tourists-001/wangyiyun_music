import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './style/reset.less';
import Vant from 'vant'
import 'vant/lib/index.css'
import puzzleVerification from 'vue-puzzle-verification'
Vue.use(puzzleVerification)
Vue.use(Vant)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    beforeCreate() {
      // 配置全局事件总线
      Vue.prototype.$bus = this
  },
   "render": (h) => h(App)
}).$mount("#app");
