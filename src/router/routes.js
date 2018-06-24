export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index')},
      { path: 'app', component: () => import('components/boidApp')}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
