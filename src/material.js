import "./base/index.scss";
import MdReactive from "core/utils/MdReactive";
import SpTheme from "core/SpTheme";

const init = () => {
    const material = new MdReactive({
        theming: {},
    });

    Object.defineProperties(material.theming, {
        metaColors: {
            get: () => SpTheme.metaColors,
            set(metaColors) {
                SpTheme.metaColors = metaColors;
            },
        },
        theme: {
            get: () => SpTheme.theme,
            set(theme) {
                SpTheme.theme = theme;
            },
        },
        enabled: {
            get: () => SpTheme.enabled,
            set(enabled) {
                SpTheme.enabled = enabled;
            },
        },
    });

    return material;
};

export default (Vue) => {
    if (!Vue.material) {
        Vue.material = init();
        Vue.prototype.$material = Vue.material;
    }
};
