import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
//路由组件
import Main from '../views/Main.vue';

//将路由与组件进行映射
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',//重定向
    },
    {
        path: "/",//路径
        name: 'Main',//组件名
        component: Main,//组件
        //子路由
        children: [
            {path: '/home',name: '',component: () => import('../views/Home.vue')},//首页
            {path: '/user',name: '',component: () => import('../views/User.vue')},//用户界面
            {path: '/pageOne',name: '',component: () => import('../views/PageOne.vue')},//首页
            {path: '/pageTwo',name: '',component: () => import('../views/PageTwo.vue')},//首页
        ]
    }
    
]
//创建router实例
const router = createRouter({
    history: createWebHistory(),
    routes
})
//对外暴露
export default router