<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-checkbox v-model="checked" label="label 1" v-sp-ripple/>
            <sp-radio id="radio1" binding="something"  v-model="something" label="label 2"/>
            <sp-radio id="radio2" binding="something" data="2" v-model="something" label="label 3" v-sp-ripple/>

            <input type="radio" name="something" value="3" v-model="something"/>
            {{something}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-checkbox",
        displayName: "Checkbox",
        data() {
            return {
                htmlExample: `

                `,
                checked: true,
                something: "3",
                color: null,
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
