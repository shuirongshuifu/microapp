import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routeArr from "./routeArr";

const router = new VueRouter({
    // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: "/",
            component: resolve => require(['@/views/Home.vue'], resolve),
        },
        ...routeArr
    ]
})
// 重写路由push方法
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
    return routerPush.call(this, location).catch(error => error)
};
export default router