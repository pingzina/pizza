<template>
  <div class="header">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="py-2" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="d-block mx-auto"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
            <line x1="9.69" y1="8" x2="21.17" y2="8" />
            <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
            <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
            <line x1="14.31" y1="16" x2="2.83" y2="16" />
            <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
          </svg>
        </a>
        <a class="navbar-brand" href="/">Pizza点餐系统</a>
        <ul class="navbar-nav">
          <li>
            <router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
          </li>
          <li>
            <router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>
          </li>
          <li>
            <router-link :to="{name:'manageLink'}" class="nav-link">管理</router-link>
          </li>
          <li>
            <router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li>
            <router-link :to="{name:'loginLink'}" class="nav-link" v-show="isLogin">登录</router-link>
          </li>
          <li class="nav-link">{{currentUser}}</li>
          <li>
            <router-link :to="{name:'regestLink'}" class="nav-link" v-show="isLogin">注册</router-link>
          </li>
          <li>
            <span  @click="loginOut()" class="nav-link" v-show="!isLogin">[退出]</span>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template> 

<script>

import { mapMutations,mapState,mapGetters,mapActions } from "vuex";

export default {
  props: {
    one: {
      type: String
    }
  },
  computed: {
    isLogin() {
      if (this.$store.userInfo && this.$store.userInfo.userid) {
        return false;
      } else {
        return true;
      }
    },
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      "clearUserInfo"
    ]),
    loginOut(){
      this.clearUserInfo();
      this.$router.push({
        name:'loginLink'
      })
    }
  }
  //添加计算属性，获取veu中的登录状态值来控制用户的登录
};
</script>


<style scoped>
</style>
