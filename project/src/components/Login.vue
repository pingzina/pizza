<template>
  <div class="login">
    <div class="row mt-3">
      <div class="col-md-12 col-lg-12">
        <div class="card">
          <div class="card-body">
            <img src="../../src/assets/login.jpg" alt class="mx-auto d-block" />
            <!-- 添加数据一键提交 -->
            <form class="form-horizontal" @submit.prevent="onSubmit()">
              <div class="form-group">
                <label for="text" class="control-label" id="text">账号：</label>
                <input type="text" class="form-control" placeholder="请输入你的账号" v-model="mobile" />
              </div>
              <div class="form-group">
                <label for="password" class="control-label" id="password">密码：</label>
                <input
                  type="current-password"
                  class="form-control"
                  placeholder="请输入你的密码"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-block">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";

//引入mapMutations

import { mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      mobile: "",
      password: ""
    };
  },
  components: {},
  //组件守卫
  beforeRouteEnter: (to, from, next) => {
    next(vm => vm.$store.dispatch("setUser", null));
  },
  methods: {
    ...mapMutations([
      "setUserInfo"]
      ),
    onSubmit() {
      if (this.password && this.mobile) {
        this.$http({
          method: "post",
          url: "/apis/login",
          data: qs.stringify({
            mobile: this.mobile,
            password: this.password
          })
        }).then(res => {
          // console.log(res.data);
          if(res.data.resultCode==0){
            window.alert(res.data.errorMessage);
            //数据发送到vuex状态管理中的action对象里面的方法
            // this.$store.dispatch("setUser", result[0].mobile);
            this.setUserInfo(res.data.res);
            // //成功之后跳转到主页面
            this.$router.push({name:'homeLink'});
          }else{
            window.alert(res.data.errorMessage);
          }
        });
      }else{
        window.alert('请填写账号或者密码');
      }
    }
  }
};
</script>


<style scoped>
img {
  height: 300px;
  width: 300px;
}
</style>
