import material from "spatial/material";
import SpMobileMenu from "./SpMobileMenu.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpMobileMenu.name, SpMobileMenu);
};
