// import Vue from "vue";
// import Router from "vue-router";

// // default views
// import StartPage from "./components/views/Start.vue";

// Vue.use(Router);

// const router = new Router({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes: [
//         {
//             path: "/",
//             name: "home",
//             component: StartPage,
//             meta: {
//                 layout: "layout-empty",
//                 isPublic: true,
//             },
//         },

//     ]
// });

// export default router;

import Vue from "vue";
import VueRouter from "vue-router";

// routes
import PageWelcome from "./views/PageWelcome.vue";

// pages
import ComponentPages from "./views/components/index";
import DirectivePages from "./views/directives";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "welcome",
        component: PageWelcome,
        meta: { title: "Welcome" },
    },
];

// components
Object.values(ComponentPages).forEach((page) => {
    routes.push({
        path: `/components/${page.name.replace("page-", "")}`,
        name: page.name,
        component: page,
        meta:
            {
                type: "component",
                displayName: page.displayName,
            },
    });
});
// directives
Object.values(DirectivePages).forEach((page) => {
    routes.push({
        path: `/directives/${page.name.replace("page-", "")}`,
        name: page.name,
        component: page,
        meta:
            {
                type: "directive",
                displayName: page.displayName,
            },
    });
});


const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

export default router;
