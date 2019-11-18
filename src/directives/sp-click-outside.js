import Vue from "vue";

Vue.directive("sp-click-outside", {
    priority: 700,
    bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
            const compName = vNode.context.name;
            // eslint-disable-next-line max-len
            let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
            if (compName) { warn += `Found in component '${compName}'`; }

            console.warn(warn);
        }
        // Define Handler and cache it on the element
        const { bubble } = binding.modifiers;
        const handler = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                binding.value(e);
            }
        };
        el.vueClickOutside = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
        document.addEventListener("touchstart", handler);
    },

    unbind(el) {
        document.removeEventListener("click", el.vueClickOutside);
        document.removeEventListener("touchstart", el.vueClickOutside);
        el.vueClickOutside = null;
    },
    stopProp(event) { event.stopPropagation(); },
});
