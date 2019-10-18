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
        name: "sp-button",
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
    @import "@/assets/scss/variables.scss";
    @import "@/assets/scss/helpers.scss";

    // All
    .sp-button,
    .sp-button-text,
    .sp-button-outlined,
    .sp-button-filled {
        display: block;
        padding: 6px 12px;
        font-weight: 500;
        font-size: 0.9rem;
        border: none;
        text-decoration: none;
        border-radius: $borderRadius-1;
        transition: .2s ease-out;
        cursor: pointer;
        @include noselect;
        @include nodrag;

        &.disabled {
            pointer-events: none;
            cursor: default !important;
            opacity: 0.5 !important;
        }
    }

    .sp-button {
        background: transparent;
        font-weight: 500;
        font-size: 1rem;
        color: $colorAccent;

        &.disabled {
            background: transparent !important;
        }

        &:hover {
        }


        &:active {
            background: rgb(220, 220, 220);
        }
    }

    .sp-button-outlined {
        background: transparent;
        font-weight: 500;
        border: 2px solid $colorAccent;
        color: $colorAccent;

        &.disabled {
        }

        &:hover {
            background: rgba(darken($colorAccent, 5%), 0.05);
            border-color: darken($colorAccent, 5%);
            color: darken($colorAccent, 5%);
        }


        &:active {
            border-color: darken($colorAccent, 10%);
            color: darken($colorAccent, 10%);
        }
    }

    .sp-button-filled {
        background: $colorAccent;
        color: white;
        font-weight: 500;

        &.disabled {
        }

        &:hover {
            background: darken($colorAccent, 5%);
        }


        &:active {
            background: darken($colorAccent, 10%);
        }
    }


    .sp-button-text {
        padding: 3px 5px !important;
        background: transparent !important;
        font-weight: 500;
        font-size: .9rem;
        color: $colorAccent;
    }

</style>

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
