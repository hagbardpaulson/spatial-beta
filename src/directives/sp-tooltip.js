import Vue from "vue";

function Timer(callback, delay) {
    let timerId;

    this.start = () => {
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, delay);
    };
    this.stop = () => {
        window.clearTimeout(timerId);
    };
    this.reset = () => {
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, delay);
    };

    this.start();
}

Vue.directive("sp-tooltip", {
    isLiteral: true,
    bind(el, binding) {
        let timer;

        const handlerReset = () => {
            if (!el.tooltip) {
                timer.reset();
            }
        };

        function fade(element) {
            let op = window.getComputedStyle(element).getPropertyValue("opacity"); // initial opacity
            const timer = setInterval(() => {
                if (op <= 0) {
                    clearInterval(timer);
                    try {
                        el.removeChild(element);
                    } catch (e) {
                        //
                    }
                }
                element.style.opacity = op;
                op -= 0.10;
            }, 20);
        }
        function clear() {
            if (el.tooltip) {
                fade(el.tooltip);
            }
        }

        const handlerLeave = () => {
            if (el.tooltip) {
                fade(el.tooltip);
                el.tooltipHandler = null;
                el.isMouseOver = false;
            }

            document.removeEventListener("mouseleave", el.tooltipHandler);
            document.removeEventListener("touchend", el.tooltipHandler);
            timer.stop();
        };
        const handlerEnter = (event) => {
            clear();
            event.preventDefault();
            el.isMouseOver = true;
            timer = new Timer((() => {
                if (el.isMouseOver) {
                    // set position to relative if not already set, for proper alignment
                    const targetStyle = window.getComputedStyle(el);
                    const initPos = targetStyle.getPropertyValue("position");
                    if (!initPos || initPos === "static") {
                        el.style.position = "relative";
                    }

                    // calculate postitions
                    const style = el.currentStyle || window.getComputedStyle(el);
                    const width = el.offsetWidth; // or use style.width
                    const padding = {
                        top: parseFloat(style.paddingTop),
                        right: parseFloat(style.paddingRight),
                        bottom: parseFloat(style.paddingBottom),
                        left: parseFloat(style.paddingLeft),
                    };
                    // create dom
                    const tooltip = document.createElement("div"); // Create a <button> element
                    tooltip.setAttribute("class", "sp-tooltip sp-z-3 anim-fadeIn");
                    const span = document.createElement("span");
                    span.textContent = `${binding.value}`;
                    tooltip.appendChild(span);

                    // add position
                    tooltip.style.animationDuration = ".2s";
                    tooltip.style.transform = `translateX(-50%) translateX(${width / 2}px)`;
                    tooltip.style.margin = `${padding.top}px ${padding.right}px -${padding.bottom}px -${padding.left}px`;
                    // tooltip.style.top = `${offsetTop.x}px`;

                    // add dom
                    el.appendChild(tooltip);

                    el.tooltipHandler = handlerLeave;
                    el.tooltip = tooltip;
                }
            }), 1000);
            el.addEventListener("mousemove", handlerReset);
            el.addEventListener("mouseleave", handlerLeave);
            el.addEventListener("touchend", handlerLeave);
        };


        el.addEventListener("mouseenter", handlerEnter);
        // el.addEventListener("touchstart", handlerEnter);
    },

    unbind(el) {
        document.removeEventListener("mouseleave", el.vueRipple);
        // document.removeEventListener("touchend", el.vueRipple);
        el.tooltip = null;
    },
    stopProp(event) { event.stopPropagation(); },
});
