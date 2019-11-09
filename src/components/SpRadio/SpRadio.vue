<template>
    <div class="sp-input-field sp-input-field-radio mt-2 p-1 nohighlight">
        <input :id="_uid" type="radio" :name="binding" :value="value" @input="onInput">
        <label :for="_uid">{{label}}</label>
    </div>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpRadio",
        props: ["binding", "label", "data", "value"],
        methods: {
            onInput() {
                this.$emit("input", this.data);
            },
        },
    });
</script>

<style lang="scss">
    @import "../../base/variables.scss";
    @import "../../base/helpers.scss";
    @import "../../base/shadows.scss";

    // ripple
    .sp-input-field-radio {
        .sp-ripple {
            z-index: 1;
            top: 0;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            animation-duration: 0.2s;
            margin: auto 0 auto 0;
            transform-origin: center;
            transform: scale(1.5);

            .sp-rippleWave {
                width: 18px !important;
                height: 18px !important;
                top: 0 !important;
                left: 0 !important;
            }
        }
    }

    .sp-input-field [type="radio"]:checked,
    .sp-input-field [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    .sp-input-field [type="radio"]:checked + label,
    .sp-input-field [type="radio"]:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        width: 100%;
        cursor: pointer;
        line-height: 18px;
        display: inline-block;
        color: rgb(50, 50, 50);
        pointer-events: auto;
        z-index: 2;
    }

    .sp-input-field [type="radio"]:checked + label:before,
    .sp-input-field [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 2px solid rgb(50, 50, 50);
        opacity: 0.3;
        border-radius: 100%;
        background: #fff;
        transition: .2s;
    }

    .sp-input-field [type="radio"]:checked + label:after,
    .sp-input-field [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 10px;
        height: 10px;
        //background: $colorAccent;
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        transition: all 0.2s ease;
    }

    .sp-input-field [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    .sp-input-field [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
</style>
