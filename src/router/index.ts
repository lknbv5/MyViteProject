import {createRouter,createWebHashHistory,createWebHistory, RouteRecordRaw} from 'vue-router'

//路由规则定义，便于模块化
const routes:RouteRecordRaw[]=[
    {
        path:'/',
        name:'home',
        component:()=>import('../Views/home/index.vue')
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../Views/login/index.vue')
    }
]
//创建路由
const router = createRouter({
    // history:createWebHistory(),//路由模式
    history:createWebHashHistory(),
    //路由规则调用
    routes
})

export default router