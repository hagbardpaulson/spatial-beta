<template>
    <sp-input-field :id="id"
                    :label="label"
                    :validationMessage="validationMessage"
                    @click="$refs.input.$el.focus()"
                    :class="[
                        {'disabled':disabled},
                    ]"
    >
        <p class="sp-input-prefix" v-if="prefix"  @click="$refs.input.focus()">
            {{prefix}}
        </p>
        <input
            ref="input"
            :placeholder="placeholder"
            class="sp-input-text"
            :class="[
                {'valid':placeholder || prefix || !isNull},
                {'input-validation-error':!isValid},
            ]"
            :type="type"
            :maxlength="maxlength"
            v-model="buffer"
            :disabled="disabled"
            @input="updateValue($event.target.value)"
            @blur="blur($event.target.value)"
            @keydown="keyDown"
            @keyup="keyUp"
        />
        <p class="sp-input-suffix" v-if="suffix"  @click="$refs.input.focus()">
            {{suffix}}
        </p>
        <p class="sp-input-required" v-if="required"  @click="$refs.input.focus()">
            *
        </p>
    </sp-input-field>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpInputText",
        // props: ["id", "value", "label", "placeholder", "prefix", "maxlength"],
        props: {
            id: String,
            type: {
                type: String,
                default: "text",
            },
            value: String,
            label: String,
            placeholder: {
                type: String,
                default: null,
            },
            prefix: {
                type: String,
                default: null,
            },
            suffix: {
                type: String,
                default: null,
            },
            maxlength: String,
            // validation
            validate: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            isValid: {
                type: Boolean,
                default: true,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                buffer: this.value,
                isNull: false,
                validationMessage: "",
            };
        },
        watch: {
            value() {
                this.buffer = this.value;
                this.isNull = this.isEmptyOrSpaces(this.value);
                this.validateValue(this.value);
            },
        },
        mounted() {
            this.isNull = this.isEmptyOrSpaces(this.value);
        },
        methods: {
            keyDown(event) {
                this.$emit("keydown", event);
                if (event.keyCode === 13) {
                    this.$emit("keydownenter", event);
                }
            },
            keyUp(event) {
                this.$emit("keyup", event);
                if (event.keyCode === 13) {
                    this.$emit("keyupenter", event);
                }
            },

            blur(value) {
                this.$emit("blur", value);
                console.log(value);
                if (this.validate) {
                    this.validateValue(value);
                }
            },
            updateValue(value) {
                this.$emit("input", value);
                this.isNull = this.isEmptyOrSpaces(value);
                if (this.validate) {
                    this.validateValue(value);
                }
            },

            validateValue(value) {
                let valid = true;
                if (this.required) {
                    if (this.isEmptyOrSpaces(value)) {
                        valid = false;
                        this.validationMessage = "Fyll i detta fält";
                    }
                }
                if (this.type === "email") {
                    if (!this.isValidEmail(value)) {
                        valid = false;
                        this.validationMessage = "Ange korrekt email";
                    }
                }
                this.isValid = valid;
                if (valid) {
                    this.validationMessageError = null;
                }
            },
            // validation
            isEmptyOrSpaces(str) {
                return !str || str === null || str.match(/^ *$/) !== null;
            },
            isValidEmail(email) {
                // eslint-disable-next-line max-len
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        },
    });
</script>

<style lang="scss">

    .sp-input-prefix{
        margin: 0 -8px 0 0;
        padding-left: 12px;
        display: flex;
        align-items: center;
        z-index: 1;
        font: inherit;
        font-weight: 400;
        opacity: .8;
    }
    .sp-input-suffix{
        margin: 0 0 0 -8px;
        padding-right: 12px;
        display: flex;
        align-items: center;
        z-index: 1;
        font: inherit;
        font-weight: 400;
        opacity: .8;
    }

    .sp-input-required {
        font: inherit;
        font-weight: 500;
        margin: 0 0 0 -8px;
        padding: 5px 8px 0 0;
        display: flex;
    }


    .sp-input-text {
        font: inherit;
        font-size: 1rem !important;
        font-weight: 400;
        height: auto;
        width: calc(100%) !important;
        min-height: 40px;
        box-shadow: none !important;
        border: none !important;
        padding: 0 12px;
        margin: 0 !important;
        //z-index: 2;
    }

</style>
