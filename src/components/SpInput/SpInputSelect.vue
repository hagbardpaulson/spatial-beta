<template>
    <sp-input-field
        :id="id"
        :label="label"
        class="sp-input-select"
        :class="[{active: active}]"
        @blur="blur"
    >
        <input id="testHidden" type="hidden" :value="value"/>
        <input
            :placeholder="placeholder"
            class="sp-input-select-text"
            :class="[{'valid':!isNull},
                     {'input-validation-error':!isValid},
                     {'dissable-search':!search}]"
            type="text"
            :maxlength="maxlength"
            v-model="buffer"
            @input="updateValue($event.target.value)"
            @click="toggle"
            ref="input"
        />
        <p v-if="!search" class="sp-input-select-value" @click="toggle">
            {{buffer}}
        </p>
        <sp-icon-chevron-down/>
        <div class="sp-input-select-dropdown sp-z-2" ref="dropdown">
            <div class="sp-input-select-dropdown-item"
                 v-for="(item, index) in matchedItems" :key="index"
                 @click="selectItem(item.value)"
            >
                {{item.header}}
            </div>
            <!-- content
            {{items}}
            <div>
                <slot v-for="item in items"
                      :item="item"/>
            </div> -->
        </div>
        <div :id="id"
             style="display: none"
             class="sp-select d-flex align-v-center noselect"
             data-input="testHidden"
             data-align="top"
             v-bind:class="[{active: isActive }, {valid: value !== null}]"
             @click.stop="toggle"
        >
            <div class="sp-select-content d-flex align-v-center" v-html="selectedHtml"></div>
            <i class="mdi mdi-chevron-down"></i>
            <div class="sp-select-dropdown sp-z-2 noselect">
                <!-- <ul ref="test" v-show="isActive" id="list" class="sp-menu-items noselect" v-click-outside="close"> -->
                <ul v-show="isActive" id="list" class="sp-menu-items noselect">
                    <!-- <slot v-for="item in items"
                          :item="item"/> -->
                    <slot/>
                </ul>
            </div>
        </div>
    </sp-input-field>
</template>

<script>
    import SpComponent from "../../core/SpComponent";

    export default new SpComponent({
        name: "SpInputSelect",
        props: ["id", "value", "label", "items", "placeholder", "maxlength", "search"],
        data() {
            return {
                val: this.value,
                selectedHtml: null,
                active: false,
                closeHandler: null,

                selectedItem: null,
                buffer: "",
                isNull: false,
                isValid: true,
                matchedItems: [],
            };
        },
        computed: {
            isActive() {
                return this.active;
                // return this.activeSelectId() === this.id;
            },
        },
        watch: {
            value() {
                this.val = this.value;
                // this.selectItem(this.value);
                // this.buffer = this.value;
            },
            items() {
                this.matchedItems = this.items;
            },
            // buffer() {
            //     console.log("buffer updated");
            //     // this.matchedItems = this.filterByValue(this.items, this.buffer);
            // },
        },
        created() {
            this.$on("selected", this.updateValue);
            this.updateValue(this.buffer);
            this.matchedItems = this.items;
            this.selectItem(this.value);
        },
        methods: {
            updateValue(value) {
                // this.$emit("input", value);
                this.isNull = this.isEmptyOrSpaces(value);
                this.matchItems(this.buffer);
            },
            matchItems(xx) {
                this.matchedItems = this.filterByValue(this.items, xx);
            },
            blur() {
                // const matchedItems = this.filterByValue(this.items, this.buffer);
                // console.log(matchedItems.length);
                // // check matched items, if not null set first match
                // if (matchedItems.length) {
                //     console.log(matchedItems[0]);
                //     this.selectItem(matchedItems[0].value);
                // }
            },
            isEmptyOrSpaces(str) {
                return !str || str === null || str.match(/^ *$/) !== null;
            },
            toggle() {
                if (this.active) {
                    return;
                }

                if (this.closeHandler) {
                    // remove Event Listeners
                    document.removeEventListener("click", this.closeHandler);
                    document.removeEventListener("touchstart", this.closeHandler);
                    this.closeHandler = null;
                }
                if (this.active) {
                    this.active = false;
                    return;
                }

                this.active = true;

                // add Event Listeners
                document.addEventListener("click", this.closeHandler);
                document.addEventListener("touchstart", this.closeHandler);

                // Define Handler and cache it on the element
                const handler = (he) => {
                    if (!this.isChild(he.target, this.$refs.input)
                        && !this.isChild(he.target, this.$refs.dropdown)) {
                            this.active = false;
                            this.buffer = this.selectedItem.header;
                            document.removeEventListener("click", this.closeHandler);
                            document.removeEventListener("touchstart", this.closeHandler);
                            this.closeHandler = null;
                        }
                };
                this.closeHandler = handler;

                // add Event Listeners
                setTimeout(() => {
                    document.addEventListener("click", handler);
                    document.addEventListener("touchstart", handler);
                }, 0);
            },
            isChild(obj, parentObj) {
                while (obj !== undefined && obj != null && obj.tagName.toUpperCase() !== "BODY") {
                    if (obj === parentObj) {
                        return true;
                    }
                    obj = obj.parentNode;
                }
                return false;
            },
            filterByValue(array, string) {
                const newArray = array.filter(el => el.header.toLowerCase().includes(string.toLowerCase()));
                return newArray;
            },
            selectItem(value) {
                // console.log(value);
                const selectedItem = this.items.filter(obj => obj.value === value)[0];
                this.buffer = selectedItem.header;
                this.selectedItem = selectedItem;
                this.$emit("input", selectedItem.value);
                this.active = false;
                this.matchItems("");
            },
        },
    });
</script>


<style lang="scss">

    .sp-input-select {
        &.active {
            .sp-input-select-dropdown {
                display: flex;
            }
            .sp-icon-chevron-down {
                transform: rotate(180deg);
            }
        }

        .sp-icon-chevron-down {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            height: 1rem;
            width: 1rem;
            margin: auto 10px auto 0;
            pointer-events: none;
            transform: rotate(0);
            transition: .2s;
            will-change: transform;
        }
    }
    .sp-input-select-text,
    .sp-input-select-value {
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
    .sp-input-select-text {
        &.dissable-search {
            visibility: hidden;
        }
    }
    .sp-input-select-value {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        cursor: pointer;
    }

    .sp-input-select-dropdown {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        min-height: 100px;
        background: white;
        border-radius: 6px;
        z-index: 99;
        margin: 5px 0 0 0;
        padding: 5px 0;

        .sp-input-select-dropdown-item {
            font-size: 1rem;
            font-weight: 400;
            padding: 5px 10px;
            cursor: pointer;

            :active {
                background: red;

            }
        }
    }

    // .sp-input-field .sp-input-select {
    //     cursor: pointer;
    //     position: relative;
    //     background-color: transparent;
    //     -webkit-appearance: none;
    //     -moz-appearance: none;
    //     min-width: 200px;
    //     min-height: 40px;
    //     border: none;
    //     padding: 0 12px !important;

    //     > i {
    //         z-index: 2;
    //         margin: 0 0 0 auto;
    //     }

    //     &.active {
    //         .sp-select-dropdown {
    //             display: block;
    //         }
    //     }

    //     .sp-select-dropdown {
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         right: 0;
    //         height: 100px;
    //         z-index: 1;
    //         display: none;
    //         background: white;
    //         position: absolute;
    //         border-radius: 6px;
    //         top: 0;
    //         left: 0;
    //         right: 0;
    //         z-index: 99;
    //         overflow: hidden;

    //         ul {
    //             padding: 10px 0;
    //             margin: 0;
    //             max-height: 300px;
    //             overflow-y: scroll;

    //             li {
    //                 height: 40px;
    //                 padding: 0 12px;

    //                 &:hover {
    //                     background: rgb(240, 240, 240);
    //                 }

    //                 &.selected {
    //                     background: rgb(220, 220, 220);
    //                 }
    //             }
    //         }
    //     }

    // }
</style>
