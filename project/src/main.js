import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import axios from 'axios'
//引入全局的vuex
import {store} from './store/store'
//设置axios请求的默认路径
axios.defaults.baseURL='https://wd4106509139npituc.wilddogio.com/'

//配置vue原型请求路由,后面的单页不需要引入axios
Vue.prototype.axios=axios;

Vue.config.productionTip = false
// 定义全局守卫==前置守卫
router.beforeEach((to,form,next)=>{
  //to:即将进入的目标，路由对象
  //form:即将离开的目标，路由对象
  // alert("登录后就可以查看");
  // next();    
  //简单实现在登陆之前不可以查看其他的内容的结构。从而达到全局守卫的功能
  if(to.path=='/login'||to.path=='/regest'){
    next();
  }else if(store.getters.isLogin===true){
    next();
  }else{
    alert("还没有登录，请先登录");
    next('/login');
  }
})
// 后置守卫，没有next的方法。进入之后触发的一系列方法。
// 这些钩子不会接受 next 函数也不会改变导航本身：
// router.afterEach((to,form)=>{
//     //  console.log(to);
//     //  console.log(form);
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
