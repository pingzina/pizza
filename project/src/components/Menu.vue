<template>
<div class="menu">
   <div class="row">
   <!-- 数据 -->
   <div class="col-sm-12 col-md-8">
   <table class="table hover">
    <thead class="thead-default">
    <tr>
       <th>尺寸</th>
       <th>价格</th>
       <th>加入</th>
    </tr>
    </thead>
      <tbody  v-for="item in getMenuList" :key="item.name">
       <tr>
          <td><strong>{{item.name}}</strong></td>
       </tr>
       <tr v-for="options in item.options" :key="options.size">
          <td>{{options.size}}</td>
          <td>{{options.price}}</td>
          <td><button  @click="addtoMemulist(item,options)" class="btn btn-sm btn-outline-success">+</button></td>
       </tr>
      </tbody>
   </table>
</div>

 <!-- 购物车 -->
 <div class="col-sm-12 col-md-4">
 <div v-if="foodList.length>0">
   <table class="table hover">
    <thead class="thead-default">
    <tr>
       <th>数量</th>
       <th>品种</th>
       <th>价格</th>
    </tr>
    </thead>
      <tbody v-for="thelist in foodList" :key="thelist.name">
       <tr>
          <td>
             <button @click="decreaseQuantity(thelist)" class="btn btn-light">-</button>
             <span>{{thelist.quantity}}</span>
             <button @click="increaseQuantity(thelist)" class="btn btn-light">+</button>
          </td>
          <td>{{thelist.name}}{{thelist.size}}</td>
          <td>{{thelist.price*thelist.quantity}}</td>
       </tr>
      </tbody>
   </table>
   <p>总价: <strong>{{total+'RMB'}}</strong></p>
   <button class="btn btn-success btn-block">提交</button>
</div>

<div v-else>{{foodListText}}</div>
</div>

</div>
</div>
</template>
<script>
    export default{
    name:"app-menu",
    data(){
       return{
          //接收菜单数据列表：
         foodList:[],
        foodListText:"购物车暂时没有数据",
          getMenuList:{
         1:{
          name:"芒果披萨",
          desc:"",
          options:[{
            size:'9寸',
            price:'55'
          }]
         },
          2:{
          name:"榴莲披萨",
          desc:"",
          options:[{
            size:'10寸',
            price:'38'
          }]
         },
          3:{
          name:"芝士披萨",
          desc:"",
          options:[{
            size:'9寸',
            price:'50'
          }],
       }
      }
   }
   },
   //添加计算属性,return出去
   computed: {
         total(){
         let totalCount=0;
         for(let index in this.foodList){
           let indexDivlist=this.foodList[index];
           totalCount+=indexDivlist.quantity*indexDivlist.price;
         }
         return totalCount;
         }
   },
    methods: {
         addtoMemulist(item,options){
        let foodShow={
         name:item.name,
         size:options.size,
         price:options.price,
         quantity:1
        }
        //添加过滤，解决重复添加数据。
        if(this.foodList.length>0){
         let result=this.foodList.filter((result)=>{
            return (foodShow.name===item.name && foodShow.price===options.price)
         })
          if(result!=null && result.length>0){
            result[0].quantity++;
          }else{
         this.foodList.push(foodShow);
          }
         }else{
         this.foodList.push(foodShow); 
         }
         },
          //购物车减少数据量
        decreaseQuantity(thelist){
           if(thelist.quantity<=0){
           this.removeFormlist(thelist);
         }else{
           thelist.quantity--;
           }
        },
        increaseQuantity(thelist){
           thelist.quantity++;       
         },
         removeFormlist(thelist){
            this.foodList.splice(this.foodList.indexOf(thelist),1)
         }
      //购物车增加数据量
      },
     

   }
</script>


<style scoped>
    
</style>
