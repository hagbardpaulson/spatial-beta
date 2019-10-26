<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-dropdown align="bottom-left" expand="bottom-right">
                <sp-button class="sp-button" v-sp-ripple>Trigger</sp-button>
                <template v-slot:content>
                    <div class="content sp-z-2">
                        co
                    </div>
                </template>
            </sp-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-dropdown",
        displayName: "Dropdown",
        data() {
            return {
                htmlExample: `
                `,
            };
        },
    };
</script>


<style lang="scss" scoped>

</style>
