<template>
    <div class="history">
   <div class="row mb-5">
    <div class="col-4">
      <!-- 导航功能 -->
    <div class="list-group mb-5">
    <router-link tag="li" :to="{name:'historyLink'}" class="nav-link">   
        <a href="" class="list-group-item list-group-item-action">历史订单</a>
    </router-link>
    <router-link tag="li" :to="{name:'contactLink'}" class="nav-link">   
        <a href="" class="list-group-item list-group-item-action">联系我们</a>
    </router-link>
    <router-link tag="li" :to="{name:'expressLink'}" class="nav-link">   
        <a href="" class="list-group-item list-group-item-action">点餐文档</a>
    </router-link>
    <router-link tag="li" :to="{name:'orderLink'}" class="nav-link">   
        <a href="" class="list-group-item list-group-item-action">快递查询</a>
    </router-link>
    </div>

    </div>
    <div class="col-8 mt-3">
      <!-- 导航对应的内容 -->
      <!-- 路由在那里，显示的页面就在哪里 -->
      <router-view></router-view>

    </div>
   
    </div>
    </div>
</template>

<script>
       export default{
       name:"history",
       data(){
       return{

       }
       }
       }

</script>
<style scoped>



</style>