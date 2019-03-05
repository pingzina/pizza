//应用mutations
//接收页面发送的数据然后发送到mutations中的方法和数据
const setUser=({commit},user)=>{
  commit('userStatus',user)
}

export {setUser};
