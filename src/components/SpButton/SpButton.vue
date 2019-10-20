<template>
    <button>
        <slot/>
    </button>
</template>

<script>
    import MdComponent from "../../core/MdComponent";

    export default new MdComponent({
        name: "SpButton",
        props: {
            href: String,
            type: {
                type: String,
                default: "button",
            },
            disabled: Boolean,
        },
        computed: {

        },
    });
</script>

<style lang="scss" scoped>
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";

    .sp-button-base {
        margin: 0;
        padding: 0;
        display: inline-block;
        position: relative;
        overflow: hidden;
        outline: none;
        background: transparent;
        border: 0;
        border-radius: 0;
        font-family: inherit;
        font-weight: 500;
        font-size: 0.9rem;
        line-height: normal;
        text-decoration: none;
        vertical-align: top;
        white-space: nowrap;
        border-radius: $borderRadius-1;
        transition: .2s;
        cursor: pointer;
        @include noselect;
        @include nodrag;

        &.disabled {
            pointer-events: none;
            cursor: default !important;
            opacity: 0.5 !important;
        }

        &::-moz-focus-inner {
            border: 0;
        }
    }

    .sp-button {
        @extend .sp-button-base;
        padding: 6px 12px;
        border: none;
        text-decoration: none;
        border-radius: $borderRadius-1;
        transition: .2s ease-out;
    }

    .sp-button-filled {
        @extend .sp-button-base;
        padding: 6px 12px;
        background: $colorAccent;
        color: white;

        &:hover {
            background: darken($colorAccent, 5%);
        }
        &:active {
            background: darken($colorAccent, 10%);
        }
    }

    .sp-button-outlined {
        @extend .sp-button-base;

        border: 2px solid $colorAccent;
        color: $colorAccent;

        &:hover {
            background: rgba(darken($colorAccent, 5%), 0.05);
            border-color: darken($colorAccent, 5%);
            color: darken($colorAccent, 5%);
        }


        &:active {
            border-color: darken($colorAccent, 10%);
            background: rgba($colorAccent, .2);
            color: darken($colorAccent, 10%);
        }
    }
</style>
