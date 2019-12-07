<template>
    <div class="sp-modal-container">
        <div class="sp-modal"
             v-bind:class="[{ enabled: enabled }, {hide: hide}]"
             :style="`width:${this.width}; height:${this.height}`">
            <div class="sp-modal-header">
                <slot name="header">
                    <h4>{{header}}</h4>
                    <a class="modal-close" @click="closeModal">
                        <sp-button v-sp-ripple class="sp-button-text modal-close">
                            <sp-icon-close/>
                        </sp-button>
                    </a>
                </slot>
            </div>
            <div class="sp-modal-content">
                <sp-modal-page-error v-if="error"/>
                <slot v-else/>
            </div>

        </div>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpModal",
        props: {
            id: null,
            header: {
                type: String,
                default: () => "false",
            },
            enabled: {
                type: Boolean,
                default: () => false,
            },
            width: {
                type: String,
                default: () => "450px",
            },
            height: {
                type: String,
                default: () => "450px",
            },
            error: {
                type: Boolean,
                default: () => false,
            },
        },
        computed: {
            currentPage() {
                return this.pages[this.pageIndex];
            },
        },
        watch: {
            enabled(newVal) {
                if (newVal) {
                    this.$emit("opened");
                    this.pageIndex = 0;
                    this.error = false;
                    this.hide = false;
                } else if (!newVal) {
                    this.$emit("closed");
                    setTimeout(() => {
                        this.hide = true;
                        console.log("hidden");
                    }, 200);
                }
            },
        },
        data() {
            return {
                hide: false,
                pages: [],
                pageIndex: 0,
            };
        },
        mounted() {
            this.$slots.default.forEach((child) => {
                if (child.componentOptions && child.componentOptions.tag === "sp-modal-page") {
                    this.pages.push(child.componentOptions.propsData.name);
                }
            });
        },
        methods: {
            closeModal() {
                this.$emit("hide");
            },
            stepToPrevious() {
                const nextIndex = this.pageIndex - 1;
                if (nextIndex >= 0) {
                    this.pageIndex = nextIndex;
                }
            },
            stepToNext() {
                const nextIndex = this.pageIndex + 1;
                if (nextIndex < this.pages.length) {
                    this.pageIndex = nextIndex;
                }
            },
        },
    });
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";
    @import "../../base/shadows.scss";

    .sp-modal-container {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        z-index: 998;
        display: flex;
        justify-content: center;
        align-items: center;

        .sp-modal {
            display: flex;
            flex-direction: column;
            max-width: 100%;
            max-height: calc(100% - 30px);
            overflow-y: auto;
            pointer-events: none;
            opacity: 0;
            background: white;
            position: absolute;
            transform: scale(0.8);
            margin: 0;
            z-index: 998;
            border-radius: 8px;
            /*will-change: opacity;*/
            -webkit-overflow-scrolling: touch;
            transition: opacity 0.2s, transform 0.2s;

            &.enabled {
                transform: scale(1);
                pointer-events: all;
                opacity: 1;
            }
            &.hide {
                display: none !important;
            }

            .sp-modal-header {
                flex-shrink: 0;
                display: grid;
                grid-template-columns: 1fr minmax(min-content, max-content);
                grid-template-rows: 1fr minmax(min-content, max-content);
                padding-bottom: 10px;
                @include notch-padding-top;
                @include notch-padding-right;
                @include notch-padding-left;

                h4 {
                    grid-column: 1;
                    grid-row: 1;
                    margin: 0;
                    font-weight: 500;
                    font-size: 1.1rem;
                }

                h5 {
                    grid-column: 1;
                    grid-row: 2;
                    margin: 0 0 0 0;
                    font-weight: 400;
                    font-size: 0.9rem;
                    line-height: 1rem;
                    color: rgb(120, 120, 120);
                }

                .modal-close {
                    grid-column: 2;
                    grid-row: 1;
                    margin: auto;
                    color: rgb(120, 120, 120);
                    background: white;
                    transition: color,background .2s;
                    font-size: 1.2rem;
                    width: 25px;
                    height: 25px;
                    border-radius: 4px;
                    display: flex;
                    cursor: pointer;

                    &:hover {
                        color: #F93D50;
                        background: rgb(240, 240, 240);
                    }

                    .sp-icon {
                        font-size: 20px;
                        height: 20px;
                        width: 20px;
                        margin: auto;
                        line-height: 20px;
                    }
                }
            }

            .sp-modal-content {
                flex: auto;
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }

            &.sp-modal-form {
                display: flex;
                flex-direction: column;
                overflow: hidden;

                .sp-modal-form-header {
                    flex-shrink: 0;
                    display: grid;
                    grid-template-columns: 1fr minmax(min-content, max-content);
                    grid-template-rows: 1fr minmax(min-content, max-content);
                    padding-bottom: 10px;
                    @include notch-padding-top;
                    @include notch-padding-right;
                    @include notch-padding-left;

                    h4 {
                        grid-column: 1;
                        grid-row: 1;
                        margin: 0;
                        font-weight: 500;
                        font-size: 1.1rem;
                    }

                    h5 {
                        grid-column: 1;
                        grid-row: 2;
                        margin: 0 0 0 0;
                        font-weight: 400;
                        font-size: 0.9rem;
                        line-height: 1rem;
                        color: rgb(120, 120, 120);
                    }

                    .modal-close {
                        grid-column: 2;
                        grid-row: 1;
                        margin: auto;
                        color: rgb(120, 120, 120);
                        background: white;
                        transition: color,background .2s;
                        font-size: 1.2rem;
                        width: 25px;
                        height: 25px;
                        border-radius: 4px;
                        display: flex;
                        cursor: pointer;

                        &:hover {
                            color: #F93D50;
                            background: rgb(240, 240, 240);
                        }

                        i {
                            font-size: 20px;
                            height: 20px;
                            width: 20px;
                            margin: auto;
                            line-height: 20px;
                        }
                    }
                }

                .sp-modal-form-body {
                    overflow: auto;
                    -webkit-overflow-scrolling: touch;
                    @include notch-padding-right;
                    @include notch-padding-left;

                    @media only screen and (max-width: $size-mobile) {
                        flex-grow: 1;
                    }

                    .input-label {
                        color: rgba(0, 0, 0, 0.6);
                        font-size: 13px;
                        margin: 0 0 0 5px;
                    }
                }

                .sp-modal-form-footer {
                    flex-shrink: 0;
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 15px;
                    @include notch-padding-right;
                    @include notch-padding-left;
                    @include notch-padding-bottom;

                    .cancel {
                        font-weight: 400;
                        color: rgb(140, 140, 140);
                        margin-right: 10px;

                        &:hover {
                            color: rgb(80, 80, 80);
                        }
                    }
                }
            }

            @media only screen and (max-width: $size-mobile) {
                width: 100% !important;
                height: 100% !important;
                max-height: 100% !important;
                border-radius: 0px !important;
            }
        }
    }
</style>
