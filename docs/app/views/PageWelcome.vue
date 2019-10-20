<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-button v-sp-ripple class="sp-button-filled">Click me</sp-button>
            <sp-button v-sp-ripple="'white'" class="sp-button-filled" style="margin-top: 10px;">Click me</sp-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-ripple",
        displayName: "Ripple",
        data() {
            return {
                htmlExample: `
                <div v-sp-ripple v-sp-ripple="'white'"/>
                `,
            };
        },
    };
</script>
