import Vue from 'vue'
import Router from 'vue-router'
import Resourse from 'vue-resource'
//使用@符号快速引入组件模块
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Regest from '@/components/Regest'
import Manage from '@/components/Manage'
//设置二级路由
import History from '@/components/about/History'
import Contact from '@/components/about/Contact'
import Express from '@/components/about/Express'
import Order from '@/components/about/Order'
//设置三级路由
import PhoneNumber from '@/components/about/contact/PhoneNumber'
import PersonName from '@/components/about/contact/PersonName'

//使用路由和vue自带请求的页面
Vue.use(Router)
Vue.use(Resourse)

  //配置路由
export default new Router({
  //取消默认的路由#
  // mode:"history",
  //配置滑动的行为，必须在跳转的页面才会执行
  scrollBehavior(to,from,savedPosition){
  //设置top值。
  //  return{x:0,y:100};
  //设置选择器，显示第一个的位置
  //  return{selector:'.btn'};
      if(savedPosition){
      //前进后退按钮的时候触发，返回到前一个页面所在的位置。
      return savedPosition;
      }else{
        return{x:0,y:0};
      }
  },
  routes:[
  {path:"/",name:"homeLink",components:{
  //实现路由的复用，相当于组件的复用
           default:Home,
          'history':History,
          'express':Express,
          'order':Order
  }
  },
  {path:"/menu",name:"menuLink",component:Menu},
  {path:"/about",name:"aboutLink",redirect:"/about/history",component:About,
  children:[
  {path:'/about/history',name:'historyLink',component:History},
  {path:'/about/contact',name:'contactLink',redirect:"/about/contact/personname",component:Contact,
   children:
   [{path:'/about/contact/phonenumber',name:'phonenumber',component:PhoneNumber},
   {path:'/about/contact/personname',name:'personname',component:PersonName}
  ]
  },
  {path:'/about/express',name:'expressLink',component:Express},
  {path:'/about/order',name:'orderLink',component:Order},
  ]},
  {path:"/login",name:"loginLink",component:Login},
  {path:"/regest",name:"regestLink",component:Regest},
{path:"/manage",name:"manageLink",component:Manage
  // ,beforeEnter:((to, from, next) => {
  //                   //路由独享的守卫
  //                   alert('非登录状态下，不能管理');
  //                   next();
  // })
},
  {path:"*",redirect:"/"}
  ]
})