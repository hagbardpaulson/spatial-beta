// eslint-disable-next-line import/no-unresolved
import material from "spatial/material";
import SpTreemenu from "./SpTreemenu.vue";
import SpTreemenuItem from "./SpTreemenuItem.vue";

export default (Vue) => {
    material(Vue);
    Vue.component(SpTreemenu.name, SpTreemenu);
    Vue.component(SpTreemenuItem.name, SpTreemenuItem);
};
