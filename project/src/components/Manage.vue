<template>
  <div class="manage">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <form action>
          <h3 class="text-muted my-5">添加新的pizza</h3>
          <div class="form-group row">
            <label class="col-sm-1">品种</label>
            <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.name">
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-1">描述</label>
            <div class="col-sm-11">
              <textarea name id rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
          </div>
          <p>
            <strong>选项一</strong>
          </p>
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

          <p>
            <strong>选项二</strong>
          </p>
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

      <div class="col-sm-12 col-md-4">
        <h3 class="text-muted my-5">菜单</h3>
        <table class="table">
          <thead class="table table-default">
            <tr>
              <th>品种</th>
              <th>删除</th>
            </tr>
          </thead>

          <tbody class="table table-default" v-for="item in getMenuList" v-bind:key="item.name">
            <tr>
              <td>{{item.name}}</td>
              <td>
                <button class="btn btn-outline-danger btn-sm" @click="deleteMenuList(item)">&times;</button>
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
export default {
  name: "manage",
  data() {
    return {
      // getMenuList: [],
      newPizza: {}
    };
  },
  created() {
    //页面显示之前获取菜单列表数据
    this.addMenuList();
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
  computed: {
    //在vuex中获取数据
    getMenuList: {
      get() {
        // return this.$store.state.menuLists;
        // 通过vuex中的getters方法获取数据，隐藏vuex中的具体保存数据的对象属性名
        return this.$store.getters.getMenulist;
      },
      set() {}
    }
  },
  methods: {
    //点击后发送新建的数据
    addNewPizza() {
      let data = {
        name: this.newPizza.name,
        size: this.newPizza.size,
        description: this.newPizza.description,
        options: [
          {
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      };
      //异步传输数据axios,vue-resource,es6--fetch
      /*fetch('https://wd4106509139npituc.wilddogio.com/menu.json', {
          method: 'POST',
          headers: {"Content-type": "application/x-www-form-urlencoded"},
          body: JSON.stringify(data),
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            // this.$router.push({name:"menuLink"}
          })
          .catch(err => {
            console.log(err);
          })*/
      //使用vue-axios实行数据请求
      this.axios.post("/apis/menu.json", data).then(res => {
        //菜单的添加
        //同步到vuex的菜单对象中，通过this.$store.commit(方法，数据)发送到vuex
        this.$store.commit("pushMenulists", data);
        if (res.status == 200) {
          this.newPizza = {};
          // this.addMenuList();
        } else {
          alert("添加失败");
        }
      });
    },
    //添加初始渲染菜单数据的方法
    addMenuList() {
      this.axios.get("/apis/menu.json").then(res => {
        // console.log(res.data);
        let menuArray = [];
        let data = res.data;
        for (let key in data) {
          //添加后续可删除的绑定的id值
          data[key].id = key;
          menuArray.push(data[key]);
        }
        // this.getMenuList=menuArray;
        //将新添加的数据发送到vuex中mutations中的方法里,从而实现数据的同步
        this.$store.commit("setMenuLists", menuArray);
      });
    },
    //添加删除菜单数据的方法
    deleteMenuList(item) {
      var truthBeTold = window.confirm("确定删除吗？");
      if (truthBeTold) {
        fetch("/apis/menu/" + item.id + ".json", {
        method: "DELETE",
        headers: { "Content-type": "application/x-www-form-urlencoded" }
      }).then(res => {
        //将将要删除的数据同步到vuex中，并且发送给mutations中的方法中；
        this.$store.commit("removeMenuItems", item);
        if (res.status == 200) {
          // this.addMenuList();
        }
      });
      }
    }
  }
};
</script>


<style scoped>
</style>
