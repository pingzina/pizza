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
               <input type="email" class="form-control" id="email" placeholder="请输入你的邮箱账号" v-model="email">
         </div>
         <div class="form-group">
            <label for="password" class="control-label">密码：</label>
               <input type="new-password" class="form-control" id="password" placeholder="请输入你的密码" v-model="password">
         </div>
         <div class="form-group">
            <label for="confirmPassword" class="control-label">确定密码：</label>
               <input type="new-password" class="form-control" id="confirmPassword" placeholder="确定密码" v-model="confirmPassword">
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
        if((this.email=='')||(this.password=='')||(this.confirmPassword=='')){
        alert('邮箱和密码不能为空');
        return;
        }else if(this.password==this.confirmPassword){
          const formdata={
             email:this.email,
             password:this.password,
             confirmPassword:this.confirmPassword
          }
          this.axios.post('users.json',formdata).then(res=>{
            console.log(res);
            if(res.status==200){
               var turnLink=window.confirm('注册成功，是否登录？');
               if(turnLink){
               this.$router.push({name:'loginLink'});
               }
            }
            })
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
