// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpInputField from "./SpInputField.vue";
import SpInputText from "./SpInputText.vue";
import SpInputTextarea from "./SpInputTextarea.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpInputField.name, SpInputField);
    Vue.component(SpInputText.name, SpInputText);
    Vue.component(SpInputTextarea.name, SpInputTextarea);
};
