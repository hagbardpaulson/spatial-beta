// export * from './components'
//export * from './install'

import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

// Export components individually
export { ComponentA, ComponentB };

// What should happen if the user installs the library as a plugin
function install(Vue) {
    Vue.component("component-a", ComponentA);
    Vue.component("component-b", ComponentB);
}

// Export the library as a plugin
export default { install };
