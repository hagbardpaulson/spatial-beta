import Vue from "vue";

Vue.directive("sp-ripple", {
    isLiteral: true,
    bind(el, binding) {
        function fade(element) {
            let op = window.getComputedStyle(element).getPropertyValue("opacity"); // initial opacity
            const timer = setInterval(() => {
                if (op <= 0) {
                    clearInterval(timer);
                    element.style.display = "none";
                    el.removeChild(element);
                }
                element.style.opacity = op;
                // element.style.filter = `alpha(opacity=${op * 100})`;
                op -= 0.05;
            }, 20);
        }
        const handlerUp = () => {
            fade(el.vueRipple);
            document.removeEventListener("mouseup", el.vueRippleHandler);
            document.removeEventListener("touchend", el.vueRippleHandler);
            el.vueRippleHandler = null;
        };
        const handlerDown = (event) => {
            function pythagorean(sideA, sideB) {
                // return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
                return Math.sqrt((sideA ** 2) + (sideB ** 2));
            }


            event.preventDefault();

            // set position to relative if not already set, for proper alignment
            const targetStyle = window.getComputedStyle(el);
            const initPos = targetStyle.getPropertyValue("position");
            if (!initPos || initPos === "static") {
                el.style.position = "relative";
            }

            // calculate postitions
            const offs = el.getBoundingClientRect();
            const x = event.pageX - offs.left;
            const y = event.pageY - offs.top;
            const offsetTop = { x: 0, y: 0 };
            const offsetRight = { x: el.offsetWidth, y: 0 };
            const offsetBottom = { x: el.offsetWidth, y: el.offsetHeight };
            const offsetLeft = { x: 0, y: el.offsetHeight };
            let diameter = Math.max(el.offsetHeight, el.offsetWidth);

            const pythagoreanTop = pythagorean(offsetTop.x - x, offsetTop.y - y);
            const pythagoreanRight = pythagorean(offsetRight.x - x, offsetRight.y - y);
            const pythagoreanBottom = pythagorean(offsetBottom.x - x, offsetBottom.y - y);
            const pythagoreanLeft = pythagorean(offsetLeft.x - x, offsetLeft.y - y);

            const pythagoreanLongest = Math.max(pythagoreanTop, pythagoreanRight, pythagoreanBottom, pythagoreanLeft);
            diameter = pythagoreanLongest * 2;

            const ripple = document.createElement("div");
            ripple.setAttribute("class", "sp-ripple");

            // create dom
            const rippleWave = document.createElement("div"); // Create a <button> element
            rippleWave.setAttribute("class", "sp-rippleWave");

            rippleWave.style.animationDuration = ".2s";
            rippleWave.style.background = binding.value;
            rippleWave.style.width = `${diameter}px`;
            rippleWave.style.height = `${diameter}px`;
            rippleWave.style.top = `${y - (diameter / 2)}px`;
            rippleWave.style.left = `${x - (diameter / 2)}px`;

            ripple.appendChild(rippleWave);
            el.appendChild(ripple);

            el.vueRippleHandler = handlerUp;
            el.vueRipple = ripple;
            document.addEventListener("mouseup", handlerUp);
            document.addEventListener("touchend", handlerUp);
            return false;
        };


        el.addEventListener("mousedown", handlerDown);
        el.addEventListener("touchstart", handlerDown);
    },

    unbind(el) {
        document.removeEventListener("mouseup", el.vueRipple);
        document.removeEventListener("touchend", el.vueRipple);
        el.vueRipple = null;
    },
    stopProp(event) { event.stopPropagation(); },
});
