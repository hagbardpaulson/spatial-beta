<template>
    <div class="sp-input-field sp-input-field-checkbox">
        <input :id="_uid" type="checkbox" :checked="checked" @input="onInput">
        <label :for="_uid">{{label}}</label>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpCheckbox",
        props: ["label", "value"],
        data() {
            return {
                checked: this.value,
            };
        },
        methods: {
            onInput() {
                this.checked = !this.checked;
                this.$emit("input", this.checked);
            },
        },
    });
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";
    @import "../../base/shadows.scss";

    // ripple
    .sp-input-field-checkbox {
        .sp-ripple {
            z-index: 1;
            top: 0;
            width: 18px;
            height: 18px;
            border-radius: 4px;
            animation-duration: 0.2s;
            margin: auto 0 auto 0;
            transform-origin: center;
            transform: scale(1.5);

            .sp-rippleWave {
                width: 24px !important;
                height: 24px !important;
                top: -3px !important;
                left: -3px !important;
            }
        }
    }

    .sp-input-field [type="checkbox"]:checked,
    .sp-input-field [type="checkbox"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    .sp-input-field [type="checkbox"]:checked + label,
    .sp-input-field [type="checkbox"]:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 18px;
        display: inline-block;
        color: rgb(50, 50, 50);
        pointer-events: auto;
        @include sp-noselect;
    }

    .sp-input-field [type="checkbox"]:checked + label:before,
    .sp-input-field [type="checkbox"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 2px solid rgb(50, 50, 50);
        opacity: 0.3;
        border-radius: 4px;
        background: #fff;
        transition: .2s;
    }


    .sp-input-field [type="checkbox"]:checked + label:after,
    .sp-input-field [type="checkbox"]:not(:checked) + label:after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 2px;
        transition: all 0.2s ease;
    }

    .sp-input-field [type="checkbox"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    .sp-input-field [type="checkbox"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
</style>
