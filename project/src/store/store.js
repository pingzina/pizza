//需要引入vue和vuex，并且使用vuex
import Vue from 'vue'
import Vuex from 'vuex'
//引入相关的代码文件
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);
 const store = new Vuex.Store({
  state: {
    //设置属性
    //存储你菜单的对象
    menuLists:{},
    //存储用户信息的对象
    currentUser:null,
    //存储用户的登录状态的对象
    isLogin:false,
    //存储用户信息
    userInfo:{}
  },
  getters,
  mutations,
  actions
})

//es6导出数据:
export {store};
