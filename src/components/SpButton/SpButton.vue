<template>
    <button class="md-theme-default">
        <slot/>
    </button>
</template>

<script>
    import MdComponent from "../../core/MdComponent";

    export default new MdComponent({
        name: "SpButton",
    });
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";

    .sp-button-base {
        text-transform: uppercase;
        margin: 0;
        padding: 8px 12px;
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
        border: none;
        text-decoration: none;
        border-radius: $borderRadius-1;
        transition: .2s ease-out;
    }

    .sp-button-primary {
        @extend .sp-button-base;
    }

    .sp-button-text {
        @extend .sp-button-base;
    }

    .sp-button-outlined {
        @extend .sp-button-base;

        border: 2px solid;
    }

    .sp-button-filled {
        @extend .sp-button-base;
        color: white;
    }

    
</style>
