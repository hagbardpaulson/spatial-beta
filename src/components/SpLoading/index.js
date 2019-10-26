// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpLoadingDots from "./SpLoadingDots.vue";
import SpLoadingSlider from "./SpLoadingSlider.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpLoadingDots.name, SpLoadingDots);
    Vue.component(SpLoadingSlider.name, SpLoadingSlider);
};
