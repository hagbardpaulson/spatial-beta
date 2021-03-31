<template>
    <div class="page">
        <h1>{{$route.meta.displayName}}</h1>

        <h2>usage</h2>
        <code>
            {{htmlExample}}
        </code>

        <h2>example</h2>
        <div class="example">
            <sp-dropdown align="bottom-left" expand="bottom-right">
                <sp-button class="sp-button">Trigger</sp-button>
                <template v-slot:content>
                    <div class="content sp-z-2">
                        <div>
                            {{data}}
                            <sp-button @click="test()">click me, no close</sp-button>
                        </div>
                        
                    </div>
                </template>
            </sp-dropdown>
            <sp-dropdown align="bottom-left" expand="bottom-right">
                <sp-button class="sp-button">Trigger menu</sp-button>
                <template v-slot:content>
                    <div class="sp-menu sp-z-2" style="min-width: 150px">
                        <p class="sp-menu-label">label</p>
                        <div class="sp-menu-item sp-trigger-close">
                            Option 1
                        </div>
                        <div class="sp-menu-item">
                            <a href="#">
                                Option 2 (link)
                            </a>
                        </div>
                        <div class="sp-menu-item">
                            as
                            <ul class="sp-z-2">
                                <div class="sp-menu-item">
                                    3.1
                                </div>
                                <p class="sp-menu-label">label</p>
                                <div class="sp-menu-item">
                                    3.2
                                </div>
                                <div class="sp-menu-item">
                                    3.3
                                </div>
                            </ul>
                        </div>
                    </div>
                </template>
            </sp-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page-spatial-dropdown",
        displayName: "Dropdown",
        data() {
            return {
                htmlExample: `
                `,
                data: "hey"
            };
        },
        methods: {
            test() {
                console.log("test");
                this.data = "ss";
            },
        }
    };
</script>


<style lang="scss" scoped>

</style>
