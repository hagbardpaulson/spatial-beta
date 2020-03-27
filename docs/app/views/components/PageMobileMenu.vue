<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-button class="sp-button-filled" @click="enabled = !enabled">Toggle</sp-button>

            <sp-mobile-menu :enabled="enabled" @hide="enabled = false">
                raw content
                <a class="sp-trigger-hide">hide</a>
            </sp-mobile-menu>
            <sp-overlay :enabled="enabled" @hide="enabled = false"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-mobile-menu",
        displayName: "Mobile Menu",
        data() {
            return {
                htmlExample: `
                <sp-mobile-menu>raw content</sp-mobile-menu> \n
                <sp-overlay :enabled="enabled" @hide="enabled = false"/>
                `,
                enabled: false,
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
