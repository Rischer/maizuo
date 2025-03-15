export default [
  {
    path: '/film/:id',
    component: () => import('@/views/film'),
    props: route => ({ id: Number(route.params.id), name: route.query.name ?? '无' })
  },
  {
    path: '/film/:id/cinemas',
    component: () => import('@/views/film/cinemas'),
    props: route => ({ id: Number(route.params.id) })
  }
]
