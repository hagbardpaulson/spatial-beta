// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpDropdown from "./SpDropdown.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpDropdown.name, SpDropdown);
};
