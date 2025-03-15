export default [
  {
    path: '/cinema/:cid/film/:fid/:time',
    component: () => import('@/views/cinema'),
    props: route => ({
      cid: Number(route.params.cid),
      fid: Number(route.params.fid),
      time: Number(route.params.time)
    })
  }
]
