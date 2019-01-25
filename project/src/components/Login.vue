<template>
<div class="login">
   <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
      <div class="card">
         <div class="card-body">
            <img src="../../src/assets/login.jpg" alt="" class="mx-auto d-block">
         <!-- 添加数据一键提交 -->
         <form class="form-horizontal" @submit.prevent="onSubmit()">
         <div class="form-group">
            <label for="email" class="control-label">邮箱：</label>
               <input type="email" class="form-control"  placeholder="请输入你的邮箱账号" v-model="email">
         </div>
         <div class="form-group">
            <label for="password" class="control-label">密码：</label>
               <input type="password" class="form-control" placeholder="请输入你的密码" v-model="password">
         </div>
         <div class="form-group">
               <button type="submit" class="btn btn-success btn-block">Sign in</button>
         </div>
         </form>
         </div>
      </div>
      </div>
   </div>
</div>
    
</template>
<script>
import axios from "axios"
    export default{
    name:"login",
    data(){
       return{
       email:'',
       password:''
       }
    },
    components:{
    },
    methods:{
     onSubmit:function(){
     axios.get('/users.json')
       .then(res=>{
      console.log(res.data);
      const data=[];
      for (let key in res.data) {
         data.push(res.data[key]);
      }
      let result=data.filter((user)=>{
            return user.email==this.email && user.password==this.password
      })
      //添加判断数组是不是为空
      if(result!=null&&result.length>0){
      //成功之后跳转到主页面
      this.$router.push({name:'homeLink'});
      }else{
         alert("账号或者密码输入错误");
      }
     })
     }
    },
   
    }
</script>


<style scoped>
      img{
         height: 300px;
         width: 300px;
      }
</style>
