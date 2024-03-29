import Vue from "vue";

Vue.directive("sp-inview", {
    isLiteral: true,
    inViewport(el, offset) {
        // let offsetTop = 0;
        let offsetBottom = 0;
        // const offsetRight = 0;
        // const offsetLeft = 0;
        if (offset) {
            const isPixels = offset.indexOf("px") >= 0;
            // const hasPct = value.indexOf("%") >= 0;
            if (isPixels) {
                const offsetInt = parseInt(offset.replace("px", ""), 10);
                // offsetTop = offsetInt;
                offsetBottom = offsetInt;
            }
        } else {
            // console.log(" ");
        }

        const rect = el.getBoundingClientRect();
        // console.log(offsetBottom);
        // console.log(rect.bottom);
        // console.log(window.innerHeight);
        if (window.innerHeight > (rect.bottom + offsetBottom)) {
            // bottom
            return true;
        }
        return false;

        // return !(rect.bottom < 0 + offsetTop || rect.right < 0
        //     || rect.left > window.innerWidth
        //     || rect.top > window.innerHeight - offsetBottom);
    },

    bind(el, binding) {
        // console.log("binding");
        el.classList.add("before-enter");
        el.$onScroll = () => {
            if (binding.def.inViewport(el, binding.value)) {
                el.classList.add("enter");
                el.classList.remove("before-enter");
                binding.def.unbind(el, binding);
            }
        };
        document.addEventListener("scroll", el.$onScroll);
    },

    inserted(el) {
        el.$onScroll();
    },

    unbind(el) {
        document.removeEventListener("scroll", el.$onScroll);
        delete el.$onScroll;
    },
});
