import Vue from "vue";
import VueRouter from "vue-router";

// routes
import PageWelcome from "./views/PageWelcome.vue";
import PageComponentA from "./views/components/PageComponentA.vue";
import PageComponentB from "./views/components/PageComponentB.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "welcome",
        component: PageWelcome,
        meta: { title: "Welcome" },
    },
    {
        path: "/components/component-a",
        name: "component-a",
        component: PageComponentA,
        meta: { title: "ComponentA" },
    },
    {
        path: "/components/component-b",
        name: "component-b",
        component: PageComponentB,
        meta: { title: "ComponentB" },
    },
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;
