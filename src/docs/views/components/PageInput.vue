<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-input label="placeholder"/>
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
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
