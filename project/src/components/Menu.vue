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
          <tbody v-for="item in getMenuList" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="(options,index) in item.options" :key="index">
            <td>{{options.size}}</td>
            <td>{{options.price}}</td>
            <td>
              <button @click="addtoMemulist(item,options)" class="btn btn-sm btn-outline-success">+</button>
            </td>
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
              <td>{{thelist.name}}{{thelist.size}}寸</td>
              <td>{{thelist.price*thelist.quantity}}</td>
            </tr>
            </tbody>
          </table>
          <p>总价: <strong>{{total+'RMB'}}</strong></p>
          <button class="btn btn-success btn-block" @click="sendMenu()">提交</button>
        </div>

        <div v-else>{{foodListText}}</div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: "app-menu",
    data() {
      return {
        //接收菜单数据列表：
        foodList: [],
        foodListText: "购物车暂时没有数据",
        // getMenuList: {}
      }
    },
    //获取菜单的数据
    created() {
      this.fetchData();
    },
    //添加计算属性,
    computed: {
      //添加数据的vuex,使用计算属性
      getMenuList() {
        //在vuex中获取数据,并且返回页面遍历渲染
        // return this.$store.state.menuLists;
        //通过vuex中的getters对象的方法调用数据。起到隐藏的作用
        return this.$store.getters.getMenulist;
      },
      //计算菜单的总和
      total() {
        let totalCount = 0;
        for (let index in this.foodList) {
          let indexDivlist = this.foodList[index];
          totalCount += indexDivlist.quantity * indexDivlist.price;
        }
        return totalCount;
      },
    },
    methods: {
      fetchData() {
        // fetch('https://wd4106509139npituc.wilddogio.com/menu.json', {})
        //   .then(res => {
        //     return res.json();
        //   })
        //   .then(data => {
        //     this.getMenuList = data;
        //   })
        /*this.http.get("menu.json")
          .then(res=>{
            // console.log(res.data);
            this.getMenuList = res.data;
          })*/
        //将原型的请求下来的数据存储在vuex中
        this.axios.get("/apis/menu.json",{})
          .then(res => {
            //使用状态存值，发送到vuex中的mutations中的方法里
            this.$store.commit("setMenuLists", res.data);
          })  

      },
      addtoMemulist(item, options) {
        //设置添加的数据
        let foodShow = {
          name: item.name,
          size: options.size,
          price: options.price,
          quantity: 1
        }
        //添加过滤，解决重复添加数据。
        if (this.foodList.length > 0) {
          let result = this.foodList.filter((result) => {
            return (result.name === item.name && result.price === options.price)
          })
          if (result != null && result.length > 0) {
            result[0].quantity++;
          } else {
            this.foodList.push(foodShow);
          }
        } else {
          this.foodList.push(foodShow);
        }
      },
      //购物车减少数据量
      decreaseQuantity(thelist) {
        if (thelist.quantity <= 1) {
          this.removeFormlist(thelist);
        } else {
          thelist.quantity--;
        }
      },
      increaseQuantity(thelist) {
        thelist.quantity++;
      },
      //封装一个函数，作为购物车的展示与消失，调用时候只需要this.function.
      removeFormlist(thelist) {
        this.foodList.splice(this.foodList.indexOf(thelist), 1)
      },
      //获取添加的菜单
      sendMenu(){
      console.log(this.foodList);
      }
    },
  }
</script>


<style scoped>

</style>
