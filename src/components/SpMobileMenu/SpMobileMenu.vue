<template>
    <div class="sp-mobile-menu sp-z-3" v-bind:class="{ enabled: enabled }" v-on:click="test($event)">
        <slot></slot>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpMobileMenu",
        props: ["enabled"],
    });
</script>

<style lang="scss">
    .sp-mobile-menu {
        max-width: 90%;
        z-index: 998;
        position: fixed;
        transform: translateX(-100%);
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        background: white;
        transition-timing-function: ease-in;
        transition: 0.2s;

        &.enabled {
            transform: translateX(0);
            transition-timing-function: ease-out;
        }
    }
</style>
