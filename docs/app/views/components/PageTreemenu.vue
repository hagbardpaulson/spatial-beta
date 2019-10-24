<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-treemenu>
                <sp-treemenu-item v-bind:class="{ 'selected': selectedIndex == 0}"
                                  @click="selectedIndex = 0">
                    item 1
                </sp-treemenu-item>
                <sp-treemenu-item v-bind:class="{ 'selected': selectedIndex == 1}"
                                  @click="selectedIndex = 1">
                    item 2
                </sp-treemenu-item>
            </sp-treemenu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-treemenu",
        displayName: "Treemenu",
        data() {
            return {
                htmlExample: `

                `,
                selectedIndex: 0,
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
