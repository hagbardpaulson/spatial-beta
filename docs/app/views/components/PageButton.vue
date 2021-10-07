<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-checkbox v-model="isLoading" label="toggle load" v-sp-ripple/>
            <sp-button class="sp-button" :isLoading="isLoading">button</sp-button>
            <sp-button class="sp-button-text" :isLoading="isLoading">button text</sp-button>
            <sp-button class="sp-button-outlined" :isLoading="isLoading">button outlined</sp-button>
            <sp-button class="sp-button-filled" :isLoading="isLoading">button filled</sp-button>
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
                isLoading: false,
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
