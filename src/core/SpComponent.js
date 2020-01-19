import SpTheme from "core/SpTheme";
import deepmerge from "deepmerge";

export default function (newComponent) {
    const defaults = {
        props: {
            spTheme: null,
        },
        computed: {
            $mdActiveTheme() {
                const { enabled, getThemeName, getAncestorTheme } = SpTheme;

                if (enabled && this.spTheme !== false) {
                    return getThemeName(this.spTheme || getAncestorTheme(this));
                }

                return null;
            },
        },
    };

    return deepmerge(defaults, newComponent);
}
