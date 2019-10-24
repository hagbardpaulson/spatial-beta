<template>
    <li class="sp-treemenu-item-container" :class="{expanded: expanded }">
        <div

            class="sp-treemenu-item d-flex flex-auto align-v-center"
            @click="select"
        >
            <slot/>
        </div>
        <!-- v-sp-ripple="'rgba(0, 124, 255, 0.1)'" -->
        <!-- <i v-if="!!$slots.nested.text" class="expand mdi mdi-menu-left ml-auto"></i> -->
        <i v-if="hasSlotData" class="expand mdi mdi-menu-left ml-auto" @click="toggleExpand"></i>
        <ul :style="[expanded ? {'height': 'auto'} : {}]">
            <slot name="nested"/>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "SpTreemenuItem",
        props: ["value"],
        data() {
            return {
                expanded: false,
            };
        },
        computed: {
            hasSlotData() {
                return this.$slots.nested;
            },
        },
        methods: {
            select(e) {
                this.$parent.$emit("selected", this.value);
                this.$emit("click", e);
                if (this.hasSlotData) {
                    this.toggleExpand();
                }
            },
            toggleExpand() {
                this.expanded = !this.expanded;
                // this.expanded = true;
            },
        },
    };
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";

    .sp-treemenu-item {
        border-radius: 4px;
        height: auto;
        outline: 0;
        color: inherit;
        padding: 10px 20px;
        transition: padding-left .2s;
        cursor: pointer;
        transition: .2s;
        @include noselect();

        h4 {
            margin: 0 0 0 10px;
            font-weight: inherit;
            transition: .2s;
        }

        .sp-treemenu-item-badge {
            height: 20px;
            margin: 0 25px 0 auto;
            background: #007CFF;
            border-radius: 4px;
            font-weight: 500;
            font-size: 0.7rem;
            line-height: 0.7rem;
            color: white;
            opacity: 0;
            transition: opacity .2s;
            padding: 4px 7px;


            &.visible {
                opacity: 1;
            }
        }

        // &:hover {
        //     color: $colorAccent;
        // }
    }
</style>
