import material from "./material";
import * as components from "./components";

const Spatial = (Vue) => {
    material(Vue);

    Object.values(components).forEach((component) => {
        Vue.use(component);
    });
};

Spatial.version = "__VERSION__";

export default Spatial;
