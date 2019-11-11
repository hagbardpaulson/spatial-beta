<template>
    <sp-input-field :label="label" @click="$refs.input.$el.focus()">
        <p class="sp-input-text-prefix" v-if="prefix"  @click="$refs.input.focus()">
            {{prefix}}
        </p>
        <input
            ref="input"
            :id="id"
            :placeholder="placeholder"
            class="sp-input-text"
            :class="[{'valid':placeholder || prefix || !isNull}, {'input-validation-error':!isValid}]"
            :type="type"
            :maxlength="maxlength"
            v-model="buffer"
            @input="updateValue($event.target.value)"
        />
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
            maxlength: Number,
        },
        data() {
            return {
                buffer: this.value,
                isNull: false,
                isValid: true,
            };
        },
        watch: {
            value() {
                this.buffer = this.value;
            },
        },
        mounted() {
            this.isNull = this.isEmptyOrSpaces(this.value);
        },
        methods: {
            updateValue(value) {
                this.$emit("input", value);
                this.isNull = this.isEmptyOrSpaces(value);
            },
            isEmptyOrSpaces(str) {
                return !str || str === null || str.match(/^ *$/) !== null;
            },
        },
    });
</script>

<style lang="scss">

    .sp-input-text-prefix{
        margin: 0 -8px 0 12px;
        display: flex;
        align-items: center;
        z-index: 1;
        font: inherit;
        font-weight: 400;
        opacity: .8;
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
        padding: 0 12px !important;
        margin: 0 !important;
        //z-index: 2;
    }

</style>
