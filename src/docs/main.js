import Vue from "vue";
// import componentsBuild from "@hagbardpaulson/nodetest3";
import "@hagbardpaulson/spatial-beta/dist/spatial-beta.css";
import spatialBeta from "@hagbardpaulson/spatial-beta";
import App from "./App.vue";
import router from "./router";
import componentsLive from "../index";
// import componentsBuild from "../../dist/spatial-beta.umd";
import "../assets/scss/spatial-all.scss";
// import componentsBuild from "../dist/nodetest3.common";


if (process.env.NODE_ENV === "development") {
    Vue.use(componentsLive);
    console.log("we're in dev");
} else {
    // Vue.use(componentsBuild);
    Vue.use(spatialBeta);
    console.log("we're in prod");
}


Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//     el: "#app",
//     components: { App },
//     template: "<App/>",
// });

router.beforeEach((to, from, next) => {
    let { title } = to.meta;
    if (!title) { title = "Spatial"; } else { title = `Spatial - ${title}`; }
    document.title = title;
    next();
});

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
