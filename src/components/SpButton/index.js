// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpButton from "./SpButton.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpButton.name, SpButton);
};
