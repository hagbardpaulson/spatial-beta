<template>
    <div class="sp-modal-page-error">
        error
    </div>
</template>

<script>
    export default {
        name: "SpModalPageError",
        props: ["name"],
    };
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";

    .sp-modal-page-error {
        display: flex;
        flex: auto;
        flex-shrink: 1;
        flex-shrink: 0;
        flex-direction: column;
        @include notch-padding-right;
        @include notch-padding-left;
    }
</style>
