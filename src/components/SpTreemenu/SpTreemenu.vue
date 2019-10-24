<template>
    <ul :id="id" class="sp-treemenu">
        <slot/>
    </ul>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpTreemenu",
        props: {
            id: null,
        },
        created() {
            // this.$on("selected", this.selected);
        },
    });
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";
    @import "../../base/shadows.scss";

    .sp-treemenu {
        margin: 0;
        margin: 0 10px;
        display: flex;
        flex-direction: column;
        grid-gap: 3px;
        font-size: 0.9rem;

        .sp-treemenu-item-container {
            position: relative;
            height: auto;
            color: gray;
            font-weight: 500;
            transition: background .2s, padding .2s;
            border-radius: 4px;

            &.selected > .sp-treemenu-item {
                // background: rgba($colorAccent, .1);
                // color: $colorAccent;
                //padding-left: 25px;
                h4 {
                    padding-left: 2px;
                }
            }

            &.expanded > .expand {
                &:before {
                    transform: rotate(-90deg);
                }

                &:hover:before {
                    //transform: rotate(0deg);
                }
            }

            &.expanded > ul {
                padding: 5px 0 5px 16px;
            }

            .expand {
                cursor: pointer;
                position: absolute;
                top: 12px;
                right: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 25px;
                height: 25px;
                border-radius: 4px;
                transition: background .2s;

                &:before {
                    transform-origin: center;
                    transition: transform .2s;
                    transform: rotate(0deg);
                }

                &:hover {
                    background: rgb(200, 200, 200);
                    color: rgb(20, 20, 20);


                    &:before {
                        //transform: rotate(-90deg);
                    }
                }
            }

            ul {
                height: 0;
                overflow: hidden;
                position: relative;
                padding: 0 0 0 16px;

                li {
                    .sp-treemenu-item {
                        padding-left: 25px !important;
                    }
                }
            }
        }
    }
</style>
