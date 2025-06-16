import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 1. 下包：npm i @micro-zoe/micro-app --save
 * 2. 引包并开始使用
 * 3. 给子应用分配路由使用
 * 4. 在路由页面使用micro-app标签
 * 5. 子应用devServer允许跨域，允许基座访问子应用
 * 6. public-path.js加一下
 * 7. 基座devServer跨域转发子应用的请求
 * 8. 其他细节处理
 * 9. 部署相关(安装官方文档走就行了 https://zeroing.jd.com/micro-app/docs.html#/zh-cn/deploy )
 * */
import microApp from '@micro-zoe/micro-app'
microApp.start(
  { // 开启预加载
    preFetchApps: [
      // { name: 'child2', url: 'http://localhost:7779/' }
      { name: 'child2', url: 'https://ashuai.work:7779/' }
    ],
    // 函数类型
    // preFetchApps: () => [
    //   { name: 'my-app', url: 'xxx' }
    // ],
  }
)

const vueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


