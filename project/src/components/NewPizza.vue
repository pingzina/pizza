<template>
    <div class="newpizza">
      <form action="">
        <h3 class="text-muted my-5">添加新的pizza</h3>
        <div class="form-group row">
          <label class="col-sm-1">品种</label>
           <div class="col-sm-11">
             <input type="text" class="form-control" v-model="newPizza.name">
           </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-1"> 描述</label>
          <div class="col-sm-11">
            <textarea name="" id=""  rows="5" class="form-control" v-model="newPizza.description"></textarea>
          </div>
        </div>
        <p><strong>选项一</strong></p>
        <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
            <input type="text" class="form-control" v-model="newPizza.size1">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
            <input type="text" class="form-control" v-model="newPizza.price1">
          </div>
        </div>

        <p><strong>选项二</strong></p>
        <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
            <input type="text" class="form-control" v-model="newPizza.size2">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
            <input type="text" class="form-control" v-model="newPizza.price2">
          </div>
        </div>

        <div class="form-group row">
          <button type="button" @click="addNewPizza()" class="btn btn-success btn-block">添加</button>
        </div>

      </form>


    </div>


</template>

<script>
     export default {
       name:'newpizza',
       data(){
         return {
           newPizza:{
           },
         }
       },
       methods:{
         //点击后发送数据
         addNewPizza(){
         let data={
           name:this.newPizza.name,
           size:this.newPizza.size,
           description:this.newPizza.description,
           options:[{
             size:this.newPizza.size1,
             price:this.newPizza.price1
           },{
             size:this.newPizza.size2,
             price:this.newPizza.price2
           }]
         };
         //跨域传输数据
           //axios,vue-resource,fetch
         fetch('https://wd4106509139npituc.wilddogio.com/menu.json',{
             method:'POST',
             headers:{"Content-type":"application/x-www-form-urlencoded"},
             body:JSON.stringify(data),
         }).then(res=>{
           return res.json();
         }).then(data=>{
           //测试文件
           console.log(data);
         })
         }
       }


     }



</script>
