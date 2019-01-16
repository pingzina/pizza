<template>
<div class="regest">
   <!-- <p>regest</p> -->
   <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
      <div class="card">
         <div class="card-body">
            <img src="../../src/assets/login.jpg" alt="" class="mx-auto d-block">
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
            <label for="confirmPassword" class="control-label">确定密码：</label>
               <input type="password" class="form-control"  placeholder="确定密码" v-model="confirmPassword">
         </div>
         <div class="form-group">
               <button type="submit" class="btn btn-success btn-block">Regest</button>
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
    name:"regest",
    data(){
       return{
       email:'',
       password:'',
       confirmPassword:''
       }
    },
    components:{
    },
    methods:{
     onSubmit:function(){
         if(this.password==this.confirmPassword){
          const formdata={
             email:this.email,
             password:this.password,
             confirmPassword:this.confirmPassword
          }
          axios.post('/users.json',formdata).then(res=>{
            console.log(res);
            if(res.status==200){
               this.$router.push({name:'loginLink'});
            }
          });
         }else{
            alert("输入密码不一致");
         }
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