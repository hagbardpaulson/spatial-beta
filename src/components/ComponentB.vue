<template>
    <div class="sp-input-field nohighlight">
        <!-- <div class="ghost">{{buffer}}</div> -->
        <input
            :id="id"
            :placeholder="placeholder"
            class="nohighlight w-100 validate"
            :class="{ 'valid' : value != null }"
            :type="type"
            :value="value"
            @input="updateValue($event.target.value)"
        />
        <div class="sp-input-field-outline-idle"></div>
        <div class="sp-input-field-outline-active"></div>
        <label class="active" :for="id">{{ label }}</label>
        <span class="sp-input-field-validation"></span>
    </div>
</template>

<script>
    export default {
        props: {
            id: { type: Number, default: 2016 },
            value: { type: String, default: "" },
            label: { type: String, default: "" },
            placeholder: { type: String, default: "" },
            type: { type: String, default: "text" },
        },
        // props: ["id", "value", "label", "placeholder"],
        data() {
            return {
                buffer: this.value,
            };
        },
        watch: {
            value() {
                this.buffer = this.value;
            },
        },
        methods: {
            updateValue(value) {
                this.$emit("input", value);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/variables.scss";
    @import "@/assets/scss/helpers.scss";

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        transition: background-color 5000s ease-in-out 0s;
    }

    .sp-input-field-container {
    }

    .sp-input-field-container .sp-input-field-validation {
        margin: 5px 0 0 auto;
        padding: 0 15px;
        text-align: right;
        color: rgba(0, 0, 0, 0.4);
        font-size: 13px;
    }

    .sp-input-field {
        position: relative;
        height: auto;
        width: auto;
    }

    .sp-input-field input {
        font-size: 1rem !important;
        height: auto;
        width: calc(100%) !important;
        min-height: 40px;
        box-shadow: none !important;
        border: none !important;
        padding: 0 12px !important;
        margin: 0 !important;
        z-index: 2;
        filter: none;
    }

    /* Hide spinner for Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    /* Hide spinner for Safari and Chrome */
    input[type=number]:-webkit-inner-spin-button,
    input[type=number]:-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .sp-input-field textarea {
        background-color: transparent;
        font-size: 1rem !important;
        border: none !important;
        padding: 12px 12px !important;
        margin: 0 !important;
        z-index: 4;
        min-width: 200px;
        min-height: 70px;
    }

    /*#region Select*/

    .sp-input-field .sp-select {
        cursor: pointer;
        position: relative;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        min-width: 200px;
        min-height: 40px;
        border: none;
        padding: 0 12px !important;

        > i {
            z-index: 2;
            margin: 0 0 0 auto;
        }

        &.active {
            .sp-select-dropdown {
                display: block;
            }
        }

        .sp-select-dropdown {
            display: none;
            background: white;
            position: absolute;
            border-radius: 6px;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99;
            overflow: hidden;

            ul {
                padding: 10px 0;
                margin: 0;
                max-height: 300px;
                overflow-y: scroll;

                li {
                    height: 40px;
                    padding: 0 12px;

                    &:hover {
                        background: rgb(240, 240, 240);
                    }

                    &.selected {
                        background: rgb(220, 220, 220);
                    }
                }
            }
        }
    }

    /*#endregion Select*/

    /*#region Checkbox */

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
    }

    .sp-input-field [type="checkbox"]:checked + label:before,
    .sp-input-field [type="checkbox"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid rgb(50, 50, 50);
        opacity: 0.3;
        border-radius: 4px;
        background: #fff;
        transition: .2s;
    }


    .sp-input-field [type="checkbox"]:checked + label:after,
    .sp-input-field [type="checkbox"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: $colorAccent;
        position: absolute;
        top: 3px;
        left: 3px;
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

    /*#endregion Checkbox */

    /*#region Radio*/

    .sp-input-field [type="radio"]:checked,
    .sp-input-field [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    .sp-input-field [type="radio"]:checked + label,
    .sp-input-field [type="radio"]:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 18px;
        display: inline-block;
        color: rgb(50, 50, 50);
        pointer-events: auto;
    }

    .sp-input-field [type="radio"]:checked + label:before,
    .sp-input-field [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid rgb(50, 50, 50);
        opacity: 0.3;
        border-radius: 100%;
        background: #fff;
        transition: .2s;
    }

    .sp-input-field [type="radio"]:checked + label:after,
    .sp-input-field [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: $colorAccent;
        position: absolute;
        top: 3px;
        left: 3px;
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

    /*#endregion Radio*/

    .sp-input-field input[type=text] ~ label,
    .sp-input-field input[type=tel] ~ label,
    .sp-input-field input[type=email] ~ label,
    .sp-input-field input[type=password] ~ label,
    .sp-input-field textarea ~ label,
    .sp-input-field .sp-select ~ label {
        transform-origin: left;
        position: absolute;
        top: 10px;
        right: auto;
        bottom: auto;
        left: 12px;
        width: auto !important;
        padding: 0 5px;
        background: white;
        color: rgba(0, 0, 0, 0.6);
        font-size: 13px;
        cursor: text;
        will-change: top, transform, color;
        transition: .2s cubic-bezier(.4,0,.2,1);
        user-select: none;
        pointer-events: none;
        -webkit-filter: blur(0);
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    }

    .sp-input-field > span {
        transform-origin: right;
        transform: translateY(100%);
        position: absolute;
        top: auto;
        right: 12px;
        bottom: 0;
        left: auto;
        width: auto;
        padding: 0 5px;
        background: white;
        color: rgba(0, 0, 0, 0.6);
        font-size: 13px;
        cursor: text;
        user-select: none;
        pointer-events: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
    }

    .sp-input-field-outline-idle,
    .sp-input-field-outline-active {
        pointer-events: none;
        border-radius: 6px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        will-change: opacity;
        transition: opacity .2s;
    }

    .sp-input-field-outline-active {
        border: 2px solid;
        opacity: 0;
    }

    .sp-input-field-outline-idle {
        opacity: 0.3;
        border: 1px rgb(50, 50, 50) solid;
    }

    /* Show Active on Focus */
    .sp-input-field input[type=text]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=tel]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=email]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=password]:focus ~ .sp-input-field-outline-active,
    .sp-input-field textarea:focus ~ .sp-input-field-outline-active {
        opacity: 1;
    }

    /* Darken Idle on Hover */
    .sp-input-field input[type=text]:hover ~ .sp-input-field-outline-idle,
    .sp-input-field input[type=tel]:hover ~ .sp-input-field-outline-idle,
    .sp-input-field input[type=email]:hover ~ .sp-input-field-outline-idle,
    .sp-input-field input[type=password]:hover ~ .sp-input-field-outline-idle,
    .sp-input-field textarea:hover ~ .sp-input-field-outline-idle,
    .sp-input-field .sp-select:hover ~ .sp-input-field-outline-idle,
    .sp-input-field input[type=checkbox]:hover + label:before,
    .sp-input-field input[type=radio]:hover + label:before {
        opacity: 1;
    }

    /* Move Label on active */
    .sp-input-field input[type=text]:focus ~ label,
    .sp-input-field input[type=tel]:focus ~ label,
    .sp-input-field input[type=email]:focus ~ label,
    .sp-input-field input[type=password]:focus ~ label,
    .sp-input-field input[type=text].valid ~ label,
    .sp-input-field input[type=tel].valid ~ label,
    .sp-input-field input[type=email].valid ~ label,
    .sp-input-field input[type=password].valid ~ label,
    .sp-input-field input[type=text].invalid ~ label,
    .sp-input-field input[type=tel].invalid ~ label,
    .sp-input-field input[type=email].invalid ~ label,
    .sp-input-field input[type=password].invalid ~ label,
    .sp-input-field input[type=text].input-validation-error ~ label,
    .sp-input-field input[type=tel].input-validation-error ~ label,
    .sp-input-field input[type=email].input-validation-error ~ label,
    .sp-input-field input[type=password].input-validation-error ~ label,
    .sp-input-field textarea:focus ~ label,
    .sp-input-field textarea.valid ~ label,
    .sp-input-field .sp-select:focus ~ label,
    .sp-input-field .sp-select.valid ~ label,
    .sp-input-field label.active {
        opacity: 1;
        transform: scale(0.89);
        top: -10px;
    }


    /* Label on Active and Valid */

    .sp-input-field input[type=text]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=tel]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=email]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=password]:focus ~ .sp-input-field-outline-active,
    .sp-input-field input[type=text].valid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=tel].valid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=email].valid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=password].valid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=text]:focus ~ label,
    .sp-input-field input[type=tel]:focus ~ label,
    .sp-input-field input[type=email]:focus ~ label,
    .sp-input-field input[type=password]:focus ~ label {
        color: $colorAccent;
        border-color: $colorAccent;
    }

    /* Label on Active and Valid */
    .sp-input-field input[type=text].invalid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=text].input-validation-error ~ .sp-input-field-outline-active,
    .sp-input-field input[type=text].invalid ~ label,
    .sp-input-field input[type=text].input-validation-error ~ label,
    .sp-input-field input[type=text].invalid ~ span,
    .sp-input-field input[type=text].input-validation-error ~ span,
    .sp-input-field input[type=tel].invalid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=tel].input-validation-error ~ .sp-input-field-outline-active,
    .sp-input-field input[type=tel].invalid ~ label,
    .sp-input-field input[type=tel].input-validation-error ~ label,
    .sp-input-field input[type=tel].invalid ~ span,
    .sp-input-field input[type=tel].input-validation-error ~ span,
    .sp-input-field input[type=email].invalid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=email].input-validation-error ~ .sp-input-field-outline-active,
    .sp-input-field input[type=email].invalid ~ label,
    .sp-input-field input[type=email].input-validation-error ~ label,
    .sp-input-field input[type=email].invalid ~ span,
    .sp-input-field input[type=email].input-validation-error ~ span,
    .sp-input-field input[type=password].invalid ~ .sp-input-field-outline-active,
    .sp-input-field input[type=password].input-validation-error ~ .sp-input-field-outline-active,
    .sp-input-field input[type=password].invalid ~ label,
    .sp-input-field input[type=password].input-validation-error ~ label,
    .sp-input-field input[type=password].invalid ~ span,
    .sp-input-field input[type=password].input-validation-error ~ span,
    .sp-input-field textarea.invalid ~ .sp-input-field-outline-active,
    .sp-input-field textarea.input-validation-error ~ .sp-input-field-outline-active,
    .sp-input-field textarea.invalid ~ label,
    .sp-input-field textarea.input-validation-error ~ label,
    .sp-input-field textarea.invalid ~ span,
    .sp-input-field textarea.input-validation-error ~ span {
        opacity: 1;
        color: #f55549;
        border-color: #f55549;
    }
</style>
