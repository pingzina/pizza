<template>
  <div class="manage">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <newPizza></newPizza>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
          <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
          </thead>

          <tbody class="table table-default">
          <tr>
            <td>榴莲pizza</td>
            <td>
              <button class="btn btn-outline-danger btn-sm">
                &times;
               </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script>
  //引入菜单管理组件
  import newPizza from './NewPizza'
  export default {
    name: "manage",
    data() {
      return {}
    },
    components:{
      "newPizza":newPizza
    },
//    //实现组件内的守卫
//   beforeRouteEnter:(to, from, next)=> {
//     //在组件守卫之前的时候，数据并没有渲染完毕，可以通过异步回调的方式实现数据的获取。
//     //  alert("hello"+this.name);
//      next(vm=>{
//          console.log(vm);
//         alert("hello-----"+vm.name);
//      });
//   },
//   beforeRouteUpdata:(to,form,next)=>{
//    //组件// 在当前路由改变，但是该组件被复用时调用
//    //比如访问一个动态的路由的时候触发的方法。
//    //可以调用实列this
//   },
//   beforeRouteLeave (to, from, next) {
//    //组件守卫离开的时候，调用的方法
//    //可以访问实例this
//    if(confirm('确认离开吗')==true){
//        next();
//    }else{
//        next(false);
//    }
//   },
    methods: {},
  };
</script>


<style scoped>
</style>
