import material from "spatial/material";
import SpInput from "./SpInput.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpInput.name, SpInput);
};
