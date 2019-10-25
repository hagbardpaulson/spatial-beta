// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpCheckbox from "./SpCheckbox.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpCheckbox.name, SpCheckbox);
};
