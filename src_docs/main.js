import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import componentsLive from "../src";
// import componentsBuild from "../dist/nodetest3.umd";

Vue.use(componentsLive);
if (process.env.NODE_ENV === "development") {
    console.log("we're in dev");
} else {
    // Vue.use(componentsBuild);
    console.log("we're in prod");
}


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
