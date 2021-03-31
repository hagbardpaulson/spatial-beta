<template>
    <div class="sp-dropdown" v-bind:class="{ active: active }">
        <div class="sp-dropdown-trigger" ref="trigger" @click="toggle">
            <slot></slot>
        </div>
        <div ref="null" class="sp-dropdown-null" v-bind:style="nullStyle" v-bind:class="{ active: active }">
            <div
                :id="id"
                v-show="active"
                ref="content"
                class="sp-dropdown-content anim-fadeIn anim-duration-1"
                v-bind:class="{ active: active }"
                v-bind:style="contentStyle"
            >
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpDropdown",
        props: ["id", "align", "expand", "offsetX", "offsetY"],
        data() {
            return {
                isMounted: false,
                closeHandler: null,
                active: false, // moved from prop, may cause havoc
            };
        },
        computed: {
            nullStyle() {
                if (!this.isMounted) return null;

                // Get positions for dropdown
                const clientPositionX = 0;
                const clientPositionY = 0;


                const { trigger, content } = this.$refs;
                const triggerWidth = trigger.firstChild.offsetWidth;
                const triggerHeight = trigger.firstChild.offsetHeight;
                const contentWidth = content.clientWidth;
                const contentHeight = content.offsetHeight;

                // Get desired alignment for dropdown
                const align = (this.align ? this.align : "cursor-cursor").split("-", 2);
                const alignY = align[0];
                const alignX = align[1];

                const offsetX = (this.offsetX ? this.offsetX : "0px");
                const offsetY = (this.offsetY ? this.offsetY : "0px");

                const expand = (this.expand ? this.expand : "bottom-right").split("-", 2);
                const expandY = expand[0];
                const expandX = expand[1];

                // Apply positions for dropdown
                let alignTop = "";
                let alignLeft = "";
                let transformOrigin = "";
                // let transform = "";

                // alignment
                if (alignX === "cursor") {
                    alignLeft = clientPositionX;
                }
                if (alignX === "left") {
                    alignLeft = 0;
                }
                if (alignX === "right") {
                    alignLeft = triggerWidth;
                }

                if (alignY === "cursor") {
                    alignTop = clientPositionY;
                }
                if (alignY === "top") {
                    alignTop = 0;
                }
                if (alignY === "bottom") {
                    alignTop = triggerHeight;
                }

                // transform origin
                if (expandX === "left" && expandY === "top") {
                    transformOrigin = "bottom right";
                } else if (expandX === "right" && expandY === "top") {
                    transformOrigin = "bottom left";
                }
                if (expandX === "left" && expandY === "bottom") {
                    transformOrigin = "top right";
                } else if (expandX === "right" && expandY === "bottom") {
                    transformOrigin = "top left";
                }

                // offset
                if (expandX === "left") {
                    alignLeft += -contentWidth;
                    // transform = "translateX(-100px)";
                }
                if (expandY === "top") {
                    alignTop += -contentHeight;
                }

                return `
                    top: ${`calc(${alignTop}px + ${offsetY})`};
                    left: ${`calc(${alignLeft}px + ${offsetX})`};
                    transform-origin: ${transformOrigin};
                    
                `;
            },
            contentStyle() {
                if (!this.isMounted) return null;

                // Get desired alignment for dropdown
                const expand = (this.expand ? this.expand : "bottom-right").split("-", 2);
                const expandY = expand[0];
                const expandX = expand[1];

                // Apply positions for dropdown
                let transform = "";

                // offset
                if (expandX === "left") {
                    transform = "translateX(-100%)";
                }
                if (expandY === "top") {
                    transform = "translateY(-100%)";
                }

                return `
                    transform: ${transform};
                    
                `;
            },
        },
        mounted() {
            this.isMounted = true;
        },
        methods: {
            toggle(e) {
                // e.preventDefault();
                // e.stopPropagation();

                if (this.closeHandler) {
                    document.removeEventListener("click", this.closeHandler);
                    document.removeEventListener("touchstart", this.closeHandler);
                    this.closeHandler = null;
                }
                if (this.active) {
                    this.active = false;
                    return;
                }

                this.active = true;

                // add Event Listeners
                document.addEventListener("click", this.closeHandler);
                document.addEventListener("touchstart", this.closeHandler);

                // Define Handler and cache it on the element
                const handler = (he) => {
                    const isCloseTrigger = he.target.className.match(/\bsp-trigger-close\b/) != null;
                    console.log(isCloseTrigger);
                    if (isCloseTrigger || !this.isChild(he.target, this.$refs.content)) {
                        this.active = false;
                        document.removeEventListener("click", this.closeHandler);
                        document.removeEventListener("touchstart", this.closeHandler);
                        this.closeHandler = null;
                    }
                };
                this.closeHandler = handler;

                // add Event Listeners
                setTimeout(() => {
                    document.addEventListener("click", handler);
                    document.addEventListener("touchstart", handler);
                }, 0);
            },

            isChild(obj, parentObj) {
                while (obj != undefined && obj != null && obj.tagName.toUpperCase() != "BODY") {
                    if (obj == parentObj) {
                        return true;
                    }
                    obj = obj.parentNode;
                }
                return false;
            },
        },
    });
</script>

<style lang="scss">
    .sp-dropdown {
        display: flex;
        position: relative;
    }

    .sp-dropdown-trigger {
        > * {
            //pointer-events: none;
        }
    }

    .sp-dropdown-null {
        z-index: 50;
        position: absolute;
        transform: scale(0.9);
        transition: transform .2s;
        will-change: transform;

        &.active {
            transform: scale(1);
        }
    }

    .sp-dropdown-content {
        z-index: 999;
        background: white;
        display: hidden;
        position: absolute;
        transition: transform .2s;
        opacity: 0;
        will-change: display, transform;

        .sp-menu {
            border-radius: 6px;
        }
    }

    .sp-dropdown-content.active {
        //transform: scale(1);
        opacity: 1;
        display: block;
    }
</style>
