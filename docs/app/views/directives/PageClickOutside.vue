<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <input :sp-click-outside="test()"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-click-outside",
        displayName: "Click outside",
        data() {
            return {
                htmlExample: `
                <div v-sp-ripple v-sp-ripple="'white'"/>
                `,
            };
        },
        methods: {
            test() {
                console.log("clicked outside");
            },
        },
    };
</script>
