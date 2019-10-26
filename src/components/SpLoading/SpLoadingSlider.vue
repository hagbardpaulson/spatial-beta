<template>
    <div class="sp-loading-slider">
        <div>
            <div :style="`width:${value}%`"></div>
        </div>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpLoadingSlider",
        props: {
            value: {
                default: () => 25,
            },
        },
    });
</script>

<style lang="scss">
    .sp-loading-slider {
        display: flex;
        justify-content: flex-start;
        border: 2px solid gray;
        width: 100px;
        height: 20px;
        border-radius: 4px;

        > div {
            flex: auto;
            margin: 4px;

            > div {
                background: currentColor;
                transition: .2s;
                border-radius: 2px;
                height: 100%;
            }
        }
    }

</style>
