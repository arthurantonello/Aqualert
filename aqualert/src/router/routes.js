const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '', component: () => import('pages/Inicio.vue')
      },
      {
        path: '/calendario', component: () => import('pages/Calendario.vue')
      },
      {
        path: '/perfil', component: () => import('pages/Perfil.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
