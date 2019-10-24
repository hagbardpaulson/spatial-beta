// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpOverlay from "./SpOverlay.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpOverlay.name, SpOverlay);
};
