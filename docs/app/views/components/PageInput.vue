<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-input-text style="margin: 20px" label="label" v-model="inputValue"/>
            <sp-input-text style="margin: 20px" placeholder="placeholder" v-model="inputValue"/>
            <sp-input-textarea style="margin: 20px" label="placeholder" placeholder="as" v-model="inputValue"/>
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
                inputValue: "hey",
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
