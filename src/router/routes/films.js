export default [
  {
    path: '/films',
    component: () => import('@/views/films'),
    redirect: '/films/nowPlaying',
    children: [
      {
        path: 'nowPlaying',
        component: () => import('@/views/nowPlaying')
      },
      {
        path: 'comingSoon',
        component: () => import('@/views/comingSoon')
      }
    ]
  }
]
