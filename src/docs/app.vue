<template>
    <div id="app">
        <div id="side_nav">
            <div id="header">
                <h1>Spatial Design</h1>
                <p>{{packageVersion()}}</p>
            </div>
            <ul>
                <li v-bind:class="{ 'selected': $route.name== 'welcome'}">
                    <router-link :to="{name: 'welcome'}" class="a-overlay"/>
                    Welcome
                </li>
                <h3>components</h3>
                <li v-for="componentPage in componentPages"
                    :key="componentPage.title"
                    v-bind:class="{ 'selected': $route.name== componentPage.route}"
                >
                    <router-link :to="{name: componentPage.route}" class="a-overlay"/>
                    {{componentPage.header}}
                </li>
            </ul>
        </div>
        <router-view id="router_view"></router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                componentPages: [
                    {
                        header: "Component A",
                        route: "component-a",
                    },
                    {
                        header: "Component B",
                        route: "component-b",
                    },
                ],
            };
        },
        methods: {
            packageVersion() {
                return process.env.PACKAGE_VERSION;
            },
        },
    };
</script>

<style lang="scss">
    @import "@/docs/assets/scss/reset.scss";
    @import "@/docs/assets/scss/site.scss";
    @import "@/docs/assets/scss/layout.scss";
</style>

<style lang="scss" scoped>
    @import "@/docs/assets/scss/variables.scss";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        display: flex;

        #side_nav {
            border-right: 1px solid $colorLight1;
            padding: 10px 15px;
            min-width: 200px;

            #header {
                margin: 0 0 20px 0;
                h1 {
                    font-size: 1rem;
                    font-weight: 600;
                }
                p {
                    font-size: .8rem;
                    font-weight: 500;
                }
            }
            ul {
                list-style: none;
                padding: 0;
                margin: 0;

                h3 {
                    font-size: 0.9rem;
                    font-weight: 500;
                    margin: 25px 0 10px;
                    color: $colorDark1;
                }

                li {
                    position: relative;
                    transition: .2s;

                    &.selected {
                        background: red;
                        font-weight: 500;
                        padding-left: 5px;
                    }
                }
            }
        }

        #router_view {
            flex: auto;
            padding: 10px 15px;
            display: flex;
            flex-direction: column;
        }
    }
</style>
