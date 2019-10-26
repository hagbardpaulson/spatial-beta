<template>
    <div class="sp-loading-dots">
        <div class="sp-loading-dot"></div>
        <div class="sp-loading-dot"></div>
        <div class="sp-loading-dot"></div>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpLoadingDots",
    });
</script>

<style lang="scss">
    .sp-loading-dots {
        height: 8px;
        display: flex;
        justify-content: center;
    }

    .sp-loading-dot {
        display: inline;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: currentColor;
        margin: 0 5px;
        animation: sp_anim_dot 1s ease-out infinite;
        transform-origin: center;
        will-change: transform;
    }

    .sp-loading-dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .sp-loading-dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes sp_anim_dot {
        0%, 30%, 70%, 100% {
            /*transform: scale(0.7);*/
            background: rgba(50, 50, 50, 0.1);
            transform: translateY(0);
        }

        50% {
            /*transform: scale(1);*/
            background: currentColor;
            transform: translateY(-5px);
        }
    }

</style>
