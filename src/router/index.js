import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Root from "./Root";
import i18n, { loadLocaleMessagesAsync } from "@/i18n";
import {
  setDocumentLang,
  setDocumentTitle
} from "@/util/i18n/document";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: i18n.locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "bands",
        name: "bands",
        component: () =>
        import("../views/Bands.vue")
      }
    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next();
    return;
  }

  const { locale } = to.params;

  loadLocaleMessagesAsync(locale).then(() => {
    setDocumentLang(locale);
    setDocumentTitle(i18n.t("app.title"));
  });

  next();
});

export default router;
