<template>
    <sp-input-field :label="label">
        <input
            :id="id"
            :placeholder="placeholder"
            class="sp-input-text"
            :class="[{'valid':!isNull}, {'input-validation-error':!isValid}]"
            type="text"
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
        props: ["id", "value", "label", "placeholder", "maxlength"],
        data() {
            return {
                buffer: this.value,
                isNull: false,
                isValid: true,
            };
        },
        computed: {

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

    .sp-input-text {
        font-size: 1rem !important;
        font-weight: 400;
        height: auto;
        width: calc(100%) !important;
        min-height: 40px;
        box-shadow: none !important;
        border: none !important;
        padding: 0 12px !important;
        margin: 0 !important;
        z-index: 2;
    }

</style>
