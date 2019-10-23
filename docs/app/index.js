import Vue from "vue";
import Spatial from "spatial";
import SpatialDirectives from "directives";
import "./themes/default.scss";

import App from "./App.vue";
import router from "./routes";

Vue.use(Spatial);
// Vue.use(SpatialDirectives);

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", () => {
    const app = new Vue({
        router,
        name: "Root",
        render: mount => mount(App),
    });

    app.$mount("#docs");
});
