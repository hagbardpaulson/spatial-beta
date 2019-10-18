<template>
    <div class="sp-overlay" @click="hide" v-bind:class="{ enabled: enabled }"></div>
</template>

<script>
    export default {
        name: "sp-overlay",
        props: ["enabled"],
        methods: {
            hide() {
                this.$emit("hide", false);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .sp-overlay {
        pointer-events: none;
        opacity: 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 120vh;
        background-color: rgba(0,0,0,.5);
        z-index: 996;
        transition: 0.2s;

        &.enabled {
            pointer-events: all;
            opacity: 1;
        }
    }
</style>
