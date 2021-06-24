import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
const Home = () => import('../components/HelloWorld')

export default createRouter({
    routes: [
        {
            path: '/:markdown',
            alias: '/',
            component: Home,
            props: true
        },
    ],
    history: createWebHistory(),
});