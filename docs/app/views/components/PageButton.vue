<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-button class="sp-button">button</sp-button>
            <sp-button class="sp-button-text">button text</sp-button>
            <sp-button class="sp-button-outlined">button outlined</sp-button>
            <sp-button class="sp-button-filled">button filled</sp-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-button",
        displayName: "Button",
        data() {
            return {
                htmlExample: `
                <sp-button class="sp-button">Button</sp-button> 
                <sp-button class="sp-button-filled">Button Filled</sp-button>
                `,
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
