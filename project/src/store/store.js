//需要引入vue和vuex，并且使用vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//es6导出数据:
export const store = new Vuex.Store({
  state: {
    //设置属性
    menuLists: {},
  },
  getters: {
    //获取属性的状态
    //通过getters方法返回数据
    getMenulist:(state)=>{
     return state.menuLists
    }
  },
  mutations: {
    //改变属性的状态
    //接收来自页面的传送的数据
    setMenuLists(state, data) {
      //第一个参数是state里面的数据
      //而用this.state则是相同的指代
      state.menuLists = data;
    },
    //菜单删除的操作
    //将匹配的对象在menulists中删除
    removeMenuItems(state,data){
      state.menuLists.forEach((item,index)=>{
        if (item==data){
          state.menuLists.splice(index,1);
        }
      })
    },
    //菜单的添加操作
    //将新添加的菜单push到menuLists中
    pushMenulists(state,data){
      state.menuLists.push(data);
    }
  },
  actions: {
    //应用mutations
  },


})
