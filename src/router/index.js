import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVModel',
      name: 'VtextAndVModel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVModel.vue')
    },
    {
      path:'/Vfor',
      name:'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path:'/Von',
      name:'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path:'/Vbind',
      name:'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path:'/VifAndVshow',
      name:'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
    },
    {
      path:'/Props',
      name:'Props',
      component: () => import('../views/Props.vue')
    },
    {
      path:'/Emit',
      name:'Emit',
      component: () => import('../views/Emit.vue')
    },
    {
      path:'/PropsAndEmit',
      name:'PropsAndEmit',
      component: () => import('../views/PropsAndEmit.vue')
    },
    {
      path:'/ProvideAndInject',
      name:'ProvideAndInject',
      component: () => import('../views/ProvideAndInject.vue')
    },
    {
      path:'/WatchAndComputed',
      name:'WatchAndComputed',
      component: () => import('../views/WatchAndComputed.vue')
    },
    {
      path:'/Practice',
      name:'Practice',
      component: () => import('../views/Practice.vue')
    },
    {
      path:'/Practice1',
      name:'Practice1',
      component: () => import('../views/Practice1.vue')
    },
    {
      path:'/Practice2',
      name:'Practice2',
      component: () => import('../views/Practice2.vue')
    },
    {
      path:'/Practice3',
      name:'Practice3',
      component: () => import('../views/Practice3.vue')
    },
    {
      path:'/Practice4',
      name:'Practice4',
      component: () => import('../views/Practice4.vue')
    },
    {
      path:'/Practice5',
      name:'Practice5',
      component: () => import('../views/Practice5.vue')
    },
    {
      path:'/Practice6',
      name:'Practice6',
      component: () => import('../views/Practice6.vue'),
      children:[
        {
          path:'home',
          component: () => import('../views/Pr6/HomePr6.vue')
        },
      ],
    },
    {
      path:'/ExpenseTracker',
      // redirect:'/ExpenseTracker/home',
      name:'ExpenseTracker',
      component: () => import('../views/ExpenseTracker.vue'),
      children:[
        {
          path:'home',
          component: () => import('../views/ExpenseTracker/Home.vue')
        },
        {
          path:'SignUp',
          component: () => import('../components/SignUp.vue')
        },
        {
          path:'Login',
          alias:'/ExpenseTracker',
          component: () => import('../components/Login.vue')
        },
      ],
    },
  ]
})

export default router
