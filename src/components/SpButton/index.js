import material from "vue-material/material";
import SpButton from "./SpButton.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpButton.name, SpButton);
};
