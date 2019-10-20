<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-button v-sp-tooltip="'no dont hover me'" class="sp-button-filled">Hover me</sp-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-tooltip",
        displayName: "Tooltip",
        data() {
            return {
                htmlExample: `
                <div v-sp-ripple v-sp-ripple="'white'"/>
                `,
            };
        },
    };
</script>
