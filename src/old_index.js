// export * from './components'
// export * from './install'

import components from "./components";
import directives from "./directives";
import "./assets/scss/spatial-all.scss";
// Export components individually
export { components };

console.log(directives);
// What should happen if the user installs the library as a plugin
function install(Vue) {
    Object.values(components).forEach((component) => {
        Vue.component(component.name, component);
        // Vue.use(component);
    });

    // Object.values(directives).forEach((directive) => {
    //     console.log(directive);
    //     // Vue.component(component.name, component);
    //     // Vue.directive("sp-ripple", SpRipple);
    //     // Vue.use(component);
    // });
}

// Export the library as a plugin
export default { install };
