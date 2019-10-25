import "./base/index.scss";
import MdReactive from "core/utils/MdReactive";
import MdTheme from "core/MdTheme";

const init = () => {
    const material = new MdReactive({
        theming: {},
    });

    Object.defineProperties(material.theming, {
        metaColors: {
            get: () => MdTheme.metaColors,
            set(metaColors) {
                MdTheme.metaColors = metaColors;
            },
        },
        theme: {
            get: () => MdTheme.theme,
            set(theme) {
                MdTheme.theme = theme;
            },
        },
        enabled: {
            get: () => MdTheme.enabled,
            set(enabled) {
                MdTheme.enabled = enabled;
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
