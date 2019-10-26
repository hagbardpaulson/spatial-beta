<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-loading-dots/>
            <sp-loading-slider style="margin: 20px; width: 200px;" :value="sliderValue"/>
            <input style="margin: 10px;" v-model="sliderValue" type="number" name="points" step="5" min="0" max="100">
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-loading",
        displayName: "Loading",
        data() {
            return {
                htmlExample: `

                `,
                sliderValue: 25,
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
