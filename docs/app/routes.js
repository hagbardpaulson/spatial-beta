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

// components
import PageButton from "./views/components/PageButton.vue";
import PageInput from "./views/components/PageInput.vue";
import PageMobileMenu from "./views/components/PageMobileMenu.vue";

// directives
import PageRipple from "./views/directives/PageRipple.vue";
import PageTooltip from "./views/directives/PageTooltip.vue";


const componentPages = {
    PageButton,
    PageInput,
    PageMobileMenu,
};

const directivePages = {
    PageRipple,
    PageTooltip,
};

Vue.use(VueRouter);

const routes = [
    // {
    //     path: "/",
    //     name: "welcome",
    //     component: PageWelcome,
    //     meta: { title: "Welcome" },
    // },
];

// components
Object.values(componentPages).forEach((page) => {
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
Object.values(directivePages).forEach((page) => {
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