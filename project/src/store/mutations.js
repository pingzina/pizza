import { userInfo } from "os";

//改变属性的状态
//接收来自页面的传值
const setMenuLists = (state, data) => {
  //第一个参数是state里面的数据
  //而用this.state则是相同的指代
  state.menuLists = data;
}
//菜单删除的操作
//将匹配的对象在menulists中删除
const removeMenuItems = (state, data) => {
  state.menuLists.forEach((item, index) => {
    if (item == data) {
      state.menuLists.splice(index, 1);
    }
  })
};
//菜单的添加操作
//将新添加的菜单push到menuLists中
const pushMenulists = (state, data) => {
  state.menuLists.push(data);
};
//更改用户的状态信息
const userStatus = (state, user) => {
  //添加判断
  if (user) {
    state.currentUser = user;
    state.isLogin = true;
  } else {
    state.currentUser = null;
    state.isLogin = false;
  }
}
//保存登录的信息
const setUserInfo=(state,userInfo)=>{
  console.log(userInfo);
  state.userInfo=userInfo;
  console.log(state.userInfo);
}

const clearUserInfo=(state)=>{
  state.userInfo={};
  console.log(state.userInfo);
}

export {setMenuLists,removeMenuItems,pushMenulists,userStatus,setUserInfo,clearUserInfo};
