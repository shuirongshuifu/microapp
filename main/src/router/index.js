import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: resolve => require(['@/views/home.vue'], resolve),
    },
    {
      // 模糊匹配 /child1/* 都指向 child1 页面
      path: '/child1/:page*',
      name: 'child1',
      component: resolve => require(['@/views/child1.vue'], resolve),
    },
    {
      path: '/child2/:page*',
      name: 'child2',
      component: resolve => require(['@/views/child2.vue'], resolve),
    },
    {
      path: '/child3',
      name: 'child3',
      component: resolve => require(['@/views/child3.vue'], resolve),
    },
  ]
})

// 重写路由push方法兜错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
  return routerPush.call(this, location).catch(error => error)
};

export default router
