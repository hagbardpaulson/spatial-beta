// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpRadio from "./SpRadio.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpRadio.name, SpRadio);
};
