const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutAbertura.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AberturaApp.vue"),
      },
      {
        path: "login",
        component: () => import("pages/LoginUsuario.vue"),
      },
    ],

  },
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "/inicio",
        component: () => import("pages/InicioUsuario.vue"),
      },
      {
        path: "/calendario",
        component: () => import("pages/CalendarioUsuario.vue"),
      },
      {
        path: "/perfil",
        component: () => import("pages/PerfilUsuario.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
