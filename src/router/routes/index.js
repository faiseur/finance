export default [
  {
    path: '/',
    title: '首页',
    component: () => import('views/main'),
    children: [
      {
        path: '/treasure',
        meta: {
          title: '财富'
        },
        component: () => import('views/treasure')
      },
      {
        path: '/insurance',
        meta: {
          title: '保险'
        },
        component: () => import('views/insurance'),
        children: [
          {
            path: '/insurance',
            meta: {
              title: '保险'
            },
            component: () => import('views/insurance')
          }
        ]
      },
      {
        path: '/xiaobai',
        meta: {
          title: '小白'
        },
        component: () => import('views/xiaobai')
      },
      {
        path: '/insurance',
        meta: {
          title: '保险'
        },
        component: () => import('views/insurance')
      }
    ]
  }
 
]