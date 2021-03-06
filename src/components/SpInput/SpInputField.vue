<template>
    <div :id="id" class="sp-input-field">
        <slot/>
        <div class="sp-input-field-outline-idle"></div>
        <div class="sp-input-field-outline-active"></div>
        <label class="active" :for="id">{{ label }}</label>
        <span class="sp-input-field-validation">{{validationMessage}}</span>
    </div>
</template>

<script>
    export default {
        name: "SpInputField",
        props: ["id", "label", "validationMessage"],
    };
</script>

<style lang="scss">

    .sp-input-field {
        position: relative;
        height: auto;
        width: auto;
        margin: 10px 0 20px 0;
        display: flex;

        // Outline styles
        &.sp-input-outline-none {
            .sp-input-field-outline-idle,
            .sp-input-field-outline-active {
                display: none;
            }
            input {
                padding: 0;
            }
            label {
                left: 0 !important;
                padding-left: 0 !important;
            }
        }
        &.sp-input-outline-under {
            .sp-input-field-outline-idle,
            .sp-input-field-outline-active {
                border-radius: 0;
                border-top: 0;
                border-right: 0;
                border-left: 0;
            }

            input {
                padding: 0;
            }
            label {
                left: 0 !important;
                padding-left: 0 !important;
            }
        }

        input {
            background: transparent;
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
    }


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
        font-weight: 400;
        transform-origin: right;
        transform: translateY(100%);
        position: absolute;
        top: auto;
        right: 0;
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

    label {
        z-index: 2;
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
        z-index: 1;
    }

    .sp-input-field-outline-active {
        border: 2px solid;
        opacity: 0;
    }

    .sp-input-field-outline-idle {
        opacity: 0.3;
        border: 2px rgb(50, 50, 50) solid;
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

    // .sp-input-field input[type=text]:focus ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=tel]:focus ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=email]:focus ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=password]:focus ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=text].valid ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=tel].valid ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=email].valid ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=password].valid ~ .sp-input-field-outline-active,
    // .sp-input-field input[type=text]:focus ~ label,
    // .sp-input-field input[type=tel]:focus ~ label,
    // .sp-input-field input[type=email]:focus ~ label,
    // .sp-input-field input[type=password]:focus ~ label {
    //     color: $colorAccent;
    //     border-color: $colorAccent;
    // }

</style>
