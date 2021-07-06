<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <div id="box1" v-sp-inview >Box 1 no offset.</div>
            <div style="height:800px">

            </div>
            <div id="box2" v-sp-inview="'100px'">Box 2 100px offset</div>
            <div style="height:800px">

            </div>
            <div id="box2" v-sp-inview>Box 2</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-inview",
        displayName: "Inview",
        data() {
            return {
                htmlExample: `
                <div v-sp-inview v-sp-inview="100px"/>

                //css
                .before-enter {} .enter {}
                `,
            };
        },
    };
</script>

<style lang="scss" scoped>
    #box1, #box2, #box3 {
        transition: 1s;

        &.before-enter {
            background: red;
        }
        &.enter {
            background: blue;
        }
    }
</style>
