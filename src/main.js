import Vue from "vue";
import App from "./App.vue";
// 引入echarts
import * as echarts from "echarts";
// 将echarts挂载在原型上
Vue.prototype.$echarts = echarts;
import "lib-flexible/flexible";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
