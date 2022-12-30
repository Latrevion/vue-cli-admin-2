import Vue from 'vue';
import VueRouter from 'vue-router';

import layout from "@/layout/auto.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

    return originalPush.call(this, location).catch(err => err)

}



const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: "login",
        component: () =>
            import('@/views/login/login.vue'),
    },
    {
        path: '/',
        name: "index",
        redirect: '/index',
        component: () => import('@/layout/admin.vue'),
        meta: { title: 'admin' },
        children:[
            {
                path: '/FileTransfer',
                component: layout,
                children: [
                    {
                        path: 'index',
                        name: "文件流转",
                        component: () => import('@/views/FileTransfer/index.vue'),
                        meta: { activeMenu: '/FileTransfer/index'  },
                    },
                ]
            },
        ]
    },
]
export default new VueRouter({
    base: process.env.BASE_URL,
    routes
})
