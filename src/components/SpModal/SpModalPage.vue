<template>
    <div class="sp-modal-page" :class="{visible: visible }" :ref="name">
        <div class="sp-modal-page-border-top sp-z-2" v-bind:style="{ opacity: borderTopOpacity }"></div>
        <div class="sp-modal-page-content" :ref="`sp-modal-page-content-${name}`">
            <slot/>
        </div>
        <div class="sp-modal-page-footer">
            <slot name="footer">
                <sp-button class="sp-button prev" @click="stepToPrevious">Previous</sp-button>
                <sp-button class="sp-button next" @click="stepToNext">Next</sp-button>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SpModalPage",
        props: ["name"],
        data() {
            return {
                borderTopOpacity: 0,
            };
        },
        computed: {
            visible() {
                return this.$parent.currentPage === this.name;
            },
        },
        created() {

        },
        mounted() {
            const ref = this.$refs[`sp-modal-page-content-${this.name}`];
            ref.addEventListener("scroll", this.handleScroll);
            this.handleScroll();
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            stepToPrevious() {
                this.$parent.stepToPrevious();
            },
            stepToNext() {
                this.$parent.stepToNext();
            },
            handleScroll() {
                const ref = this.$refs[`sp-modal-page-content-${this.name}`];
                const scrollY = ref.scrollTop;
                const scrollTarget = 50;
                const target = 0.99;

                const percentage = (scrollY) / scrollTarget;
                const value = Math.max(0, Math.min(target, (target) * percentage));
                if (value <= 1) {
                    this.borderTopOpacity = value;
                } else {
                    this.borderTopOpacity = 1;
                }
            },
        },
    };
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";

    .sp-modal-page {
        display: none;
        flex: auto;
        flex-shrink: 1;
        flex-shrink: 0;
        flex-direction: column;

        &.visible {
            display: inherit;
        }

        .sp-modal-page-border-top {
            opacity: 0;
            //border-top: 1px solid rgb(240, 240, 240);
        }
        .sp-modal-page-content {
            flex: auto;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            @include notch-padding-right;
            @include notch-padding-left;
        }

        .sp-modal-page-footer {
            border-top: 1px solid rgb(240, 240, 240);
            padding-top: 10px;
            height: 65px;
            display: flex;
            justify-content: flex-end;
            flex-shrink: 0;
            @include notch-padding-right;
            @include notch-padding-left;
            @include notch-padding-bottom();

            .prev, .close {
                height: 40px;
                margin: 0 auto 0 0;
                color: $colorDark1;

                &:hover {
                    background: $colorLight1;
                    color: $colorDark2;
                }

                &.disabled {
                    background: none;
                    opacity: 0 !important;
                    width: 0;
                    padding: 0;
                    margin: 0;
                }
            }
            .next, .submit {
                margin: 0 0 0 auto;
                height: 40px;

                &.disabled {
                    background: rgb(240, 240, 240);
                    color: rgb(120, 120, 120);
                }
            }
        }
    }
</style>
