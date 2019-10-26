<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>
        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-button class="sp-button-filled" @click="modalEnabled = !modalEnabled" v-sp-ripple>Open Modal</sp-button>

            <sp-modal header="Modal name"
                      :enabled="modalEnabled"
                      :error="modalError"
                      @hide="modalEnabled = false"
                      width="450px" height="450px"
            >
                <sp-modal-page name="page1" visible="true">
                    page 1
                </sp-modal-page>

                <sp-modal-page name="page2" visible="true">
                    page 2
                    <sp-button class="sp-button" @click="modalError = true">Show error</sp-button>
                </sp-modal-page>
                <sp-modal-page name="page3" visible="true">
                    <div style="height: 200px; width: 200px">
                        <ul>
                            <li v-for="index in 40" :key="index">
                                item: {{index}}
                            </li>
                        </ul>
                    </div>
                </sp-modal-page>
            </sp-modal>
            <sp-overlay :enabled="modalEnabled" @hide="modalEnabled = false"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-modal",
        displayName: "Modal",
        data() {
            return {
                htmlExample: `

                `,
                modalEnabled: false,
                modalError: false,
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
