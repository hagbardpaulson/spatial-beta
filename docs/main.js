import Vue from "vue";
import App from "./app.vue";
import router from "./router";

import nodetest3 from "../src";
Vue.use(nodetest3);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//     el: "#app",
//     components: { App },
//     template: "<App/>",
// });
new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
