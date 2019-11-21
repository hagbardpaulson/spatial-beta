<template>
    <sp-input-field :label="label">
        <textarea
            :placeholder="placeholder"
            class="sp-input-textarea"
            :class="[{'valid':!isNull}, {'input-validation-error':!isValid }]"
            type="text"
            v-model="buffer"
            @input="updateValue($event.target.value)"
            ref="textarea"
        >
        </textarea>
        <pre ref="ghost" class="sp-input-textarea-ghosting" v-if="autoheight">{{buffer}}</pre>
    </sp-input-field>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpInputTextarea",
        props: ["id", "value", "label", "placeholder", "maxlength", "autoheight"],
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
            buffer() {
                // if (this.autoheight === true) {
                //     this.$nextTick(() => {
                //         this.setHeight();
                //     });
                // }
            },
        },
        mounted() {
            this.isNull = this.isEmptyOrSpaces(this.value);
        },
        methods: {
            updateValue(value) {
                this.$emit("input", value);
                this.isNull = this.isEmptyOrSpaces(value);
                console.log("update");
                this.updateHeight();
            },
            isEmptyOrSpaces(str) {
                return !str || str === null || str.match(/^ *$/) !== null;
            },
            updateHeight() {
                if (this.autoheight !== true) {
                    return;
                }
                this.$nextTick(() => {
                    this.$refs.textarea.setAttribute(
                        "style",
                        `height:${this.$refs.ghost.offsetHeight}px`,
                    // ``,
                    );
                });
            },
        },
    });
</script>

<style lang="scss">

    .sp-input-textarea,
    .sp-input-textarea-ghosting{
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

    .sp-input-textarea-ghosting {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        white-space: pre-wrap;
        opacity: 0;
        z-index: -1;
        pointer-events: none;
        word-break: break-all;
    }

</style>
