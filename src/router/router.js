export default [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main/Main.vue'),
    meta: {
      title: "首页"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      title: "登录"
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/Register.vue'),
    meta: {
      title: "注册"
    }
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('@/views/Code/Code.vue'),
    meta: {
      title: "验证"
    }
  },
  {
    path: '/nikname',
    name: 'NikName',
    component: () => import('@/views/SetNikName/SetNikName.vue'),
    meta: {
      title: "昵称"
    }
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/search',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      title: "主页"
    },
    children: [{
      path: '/search',
      name: 'Search',
      component: () => import('@/views/Search/Search.vue'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/podcast',
      name: 'Podcast',
      component: () => import('@/views/Podcast/Podcast.vue'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/yuncun',
      name: 'Yuncun',
      component: () => import('@/views/Weibo/Weibo.vue'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/follow',
      name: 'Follow',
      component: () => import('@/views/Follow/Follow.vue'),
      meta: {
        keepAlive: true
      }
    },{
      path: '/user',
      name: 'User',
      component: () => import('@/views/User/User.vue'),
      meta: {
        keepAlive: true
      }
    }]
  }
]