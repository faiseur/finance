export default [
  {
    path: '/',
    title: '首页',
    component: () => import('views/main'),
    children: [
      {
        path: '/treasure',
        meta: {
          title: '稳健理财'
        },
        component: () => import('views/treasure')
      },
      {
        path: '/insurance',
        meta: {
          title: '商城保险'
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
          title: '进阶理财'
        },
        component: () => import('views/xiaobai')
      },
      {
        path: '/insurance',
        meta: {
          title: '信用生活'
        },
        component: () => import('views/insurance')
      }
    ]
  }
]
