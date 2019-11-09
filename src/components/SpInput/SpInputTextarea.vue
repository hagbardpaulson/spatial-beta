<template>
    <sp-input-field :label="label">
        <textarea
            :placeholder="placeholder"
            class="sp-input-textarea"
            :class="[{'valid':!isNull}, {'input-validation-error':!isValid }]"
            type="text"
            v-model="buffer"
            @input="updateValue($event.target.value)"
        >
        </textarea>
    </sp-input-field>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpInputTextarea",
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

    .sp-input-textarea {
        background-color: transparent;
        font-size: 1rem !important;
        font-weight: 400;
        border: none !important;
        padding: 12px 12px !important;
        margin: 0 !important;
        z-index: 4;
        min-width: 100px;
        min-height: 48px;
    }

</style>
