// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpIconClose from "./SpIconClose.vue";
import SpIconChevronDown from "./SpIconChevronDown.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpIconClose.name, SpIconClose);
    Vue.component(SpIconChevronDown.name, SpIconChevronDown);
};
