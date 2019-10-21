import material from "spatial/material";
import SpButton from "./SpButton.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpButton.name, SpButton);
};
