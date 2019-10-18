<template>
    <div class="page">
        <h1>Component B</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <component-b label="placeholder"/>
        </div>
        <!-- <component-b/> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                htmlExample: `
                <component-b/>
                `,
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
