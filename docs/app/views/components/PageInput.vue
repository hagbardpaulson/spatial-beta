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
            <sp-checkbox v-model="selectSearch" label="Can search" v-sp-ripple/>
            <sp-input-select
                id="select_type"
                label="Choose Type"
                :search="selectSearch"
                :items="items"
                v-model="selectValue"
            />
            <sp-input-text label="label" v-model="inputValue" @keyupenter="htmlExample = 's'"/>
            <sp-input-text label="required" type="email" :validate="true" :required="true" maxlength="10" v-model="inputValue"/>
            <sp-input-text label="label" placeholder="placeholder" v-model="inputValue"/>
            <sp-input-text label="Prefix" prefix="+46" v-model="inputValue"/>
            <sp-input-text label="Suffix" suffix="@mail.com" v-model="inputValue"/>
            <sp-input-textarea label="placeholder" placeholder="as" v-model="inputValue"/>
            <sp-input-textarea label="placeholder" v-model="inputValue"/>
            <sp-input-text label="No border" class="sp-no-border" v-model="inputValue"/>
        </div>
        <!-- <component-b/> -->
    </div>
</template>

<script>
    export default {
        name: "page-spatial-input",
        displayName: "Input",
        data() {
            return {
                htmlExample: `
                <sp-input/>
                `,
                inputValue: "",
                selectSearch: true,
                selectValue: 1,
                items: [
                    {
                        value: 1,
                        header: "Sweden",
                    },
                    {
                        value: 2,
                        header: "Italy",
                    },
                    {
                        value: 3,
                        header: "Norway",
                    },
                ],
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
