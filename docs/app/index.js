// /* Third Party */
// import Vue from 'vue'
// import VueMaterial from 'spatial'

// /* App */
// import App from './components/App'

// /* Routing */
// import router from "./router";

// Vue.config.productionTip = false
// Vue.use(VueMaterial)

// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     router,
//     name: 'Root',
//     render: mount => mount(App)
//   })

//   app.$mount('#docs')
// })


import Vue from "vue";
import VueMaterial from "spatial";
import './themes/default.scss'
// import componentsBuild from "@hagbardpaulson/nodetest3";

import App from "./App.vue";
import router from "./routes";

Vue.use(VueMaterial);

// if (process.env.NODE_ENV === "development") {
//     Vue.use(componentsLive);
//     console.log("we're in dev");
// } else {
//     // Vue.use(componentsBuild);
//     Vue.use(spatialBeta);
//     console.log("we're in prod");
// }


Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//     el: "#app",
//     components: { App },
//     template: "<App/>",
// });

// router.beforeEach((to, from, next) => {
//     let { title } = to.meta;
//     if (!title) { title = "Spatial"; } else { title = `Spatial - ${title}`; }
//     document.title = title;
//     next();
// });

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount("#app");
document.addEventListener("DOMContentLoaded", () => {
    const app = new Vue({
        router,
        name: "Root",
        render: mount => mount(App),
    });

    app.$mount("#docs");
});
