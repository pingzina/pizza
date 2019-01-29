//获取属性的状态
//通过getters方法返回数据
  const getMenulist=(state)=>{return state.menuLists};
  //返回用户信息的数据
  const currentUser=(state)=>state.currentUser;
  //返回用户登录状态的数据
  const isLogin=(state)=>state.isLogin

export {getMenulist,currentUser,isLogin};
