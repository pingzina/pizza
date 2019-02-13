<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
       <!-- <p>这是一条来自于子级标签传来的数据{{theSon}}</p> -->
    <!-- 使用路由的功能是点击哪一个跳转到那一个页面 -->
     <div class="container">
      <router-view></router-view>
    </div>
    <br/>
    <!-- 实现组件的复用 -->
     <div class="container">
       <div class="row">
         <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
         </div>
          <div class="col-sm-12 col-md-4">
          <router-view name="express"></router-view>
         </div>
         <div class="col-sm-12 col-md-4">
          <router-view name="order"></router-view>
       </div>
       </div>
     </div>

     <div class="container">
      <app-footer></app-footer>
    </div>
  </div>
</template> 

<script>
// 注册组件头部
import Header from './components/Header'
//注册底部导航
import FootBar from './components/FootBar'

export default {
  name: 'App',
  components:{
  "app-header":Header,
  "app-footer":FootBar
  },
  data(){
    return{
      
    }
  },
  methods:{
     

  }
}
</script>

<style>

</style>
