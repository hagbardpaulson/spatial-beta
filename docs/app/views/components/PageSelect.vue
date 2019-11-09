<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <p>selected: {{selectValue}}</p>
            <sp-input-select
                id="select_type"
                label="Choose Type"
                :items="items"
                v-model="selectValue"
            >

            </sp-input-select>

            <select v-model="selectValue">
                <option value="test">
                    test
                </option>
                <option value="test 2">
                    test 2
                </option>
            </select>

        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-select",
        displayName: "Select",
        data() {
            return {
                htmlExample: `
                <sp-button class="sp-button">Button</sp-button> 
                <sp-button class="sp-button-filled">Button Filled</sp-button>
                `,
                selectValue: "",
                items: [
                    {
                        value: "1",
                        header: "Sweden",
                    },
                    {
                        value: "2",
                        header: "Italy",
                    },
                    {
                        value: "3",
                        header: "Norway",
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped>
    .example {
        button {
            margin: 10px;
        }
    }
</style>
