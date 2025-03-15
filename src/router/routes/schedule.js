export default [
  {
    path: '/schedule/:sid',
    component: () => import('@/views/schedule'),
    props: route => ({
      sid: Number(route.params.sid)
    }),
    meta: {
      login: true
    }
  }
]
