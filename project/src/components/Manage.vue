<template>
  <div class="manage">
    <p>manage</p>
  </div>
</template>
<script>
  export default {
    name: "manage",
    data() {
      return {}
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
    components: {},
    methods: {},
  };
</script>


<style scoped>
</style>
