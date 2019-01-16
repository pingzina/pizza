<template>
  <div class="home col-sm-12 text-center">
    <div class="background">
      <h1>欢迎大家品尝pizz!</h1>
      <h2>你想要的这里都有!</h2>
      <button class="btn btn-success text-center" v-on:click="turn()">Let's go !</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      users:''

    };
  },
  components: {},
  methods: {
    turn: function() {
      //类似于历史纪录的上一个，跳转到上一次浏览的页面
      //this.$router.go(-1);
      //跳转到指定的地址下
      //   this.$router.replace("/menu");
      //跳转到指定的name下
      // this.$router.replace({name:'menuLink'});
      //通过push进行跳转,压栈
      this.$router.push({ name: "menuLink" });
    }
  },
};
</script>

<style scoped>
.home {
  background: url(../../src/assets/pizza.jpg);
  background-size: cover;
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}
</style>