// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpModal from "./SpModal.vue";
import SpModalPage from "./SpModalPage.vue";

// premade pages
import SpModalPageError from "./SpModalPageError.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpModal.name, SpModal);
    Vue.component(SpModalPage.name, SpModalPage);
    Vue.component(SpModalPageError.name, SpModalPageError);
};
