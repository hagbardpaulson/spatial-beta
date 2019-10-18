<template>
    <button @click="triggerClick">
        <div :class="['content', { isLoading: isLoading }]">
            <slot/>
        </div>

        <loading-dots v-if="isLoading" class="anim-fadeIn"/>
    </button>
</template>

<script>
    export default {
        props: {
            isLoading: { type: Boolean, default: false },
        },
        methods: {
            triggerClick(e) {
                if (this.isLoading) { return; }
                this.$emit("click", e);
            },
        },
    };
</script>


<style lang="scss" scoped>
    button {
        position: relative;


        &::-moz-focus-inner {
            border: 0;
        }


        &.sp-button-filled {
            .loading-dots {
                color: white;
            }
        }

        .content {
            transition: .2s;

            &.isLoading {
                opacity: 0;
            }
        }
        .loading-dots {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;

            /deep/ .loading-dot {
                width: 6px;
                height: 6px;
            }
        }
    }
</style>
