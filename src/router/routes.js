const routes = [
  {
    path: "/",
    component: () => import("layouts/LayoutAbertura.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Abertura.vue"),
      },
      {
        path: "login",
        component: () => import("pages/Login.vue"),
      },
      {
        path: "/cadastro",
        component: () => import("pages/Cadastro1.vue"),
      },
      {
        path: "/cadastro2",
        component: () => import("pages/Cadastro2.vue"),
      },
    ],

  },
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "/inicio",
        component: () => import("pages/Inicio.vue"),
      },
      {
        path: "/calendario",
        component: () => import("pages/Calendario.vue"),
      },
      {
        path: "/perfil",
        component: () => import("pages/Perfil.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
