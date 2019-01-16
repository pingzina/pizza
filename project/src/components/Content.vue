<template>
<div class="content">
<dl>
    <dt>实现双向数据绑定/input/select/textarea</dt>
    <dd>1通过监听事件来实现</dd>
    <dd>2通过v-model来实现</dd>
    <dd>3有一个方法 watch,它可以用来监测Vue实例上的数据变动。</dd>
</dl>
<div>
<!-- 通过事件绑定的方法实现双向绑定，添加属性绑定和事件绑定，属性绑定可以获取input里面输入的值-->
<label>姓名:</label>
<input type="text" ref="name" v-on:keyup="nameValue"><span>{{name}}</span>
</div>

<div>
<label>年龄:</label>
<input type="text" v-model="age"><span></span>{{age}}
</div>
<div>
<label>爱好:</label>
<input type="text" v-model="textValue"><span></span>{{hobby}}
</div>

</div> 
</template> 

<script>
export default {
  name: "contente",
  data() {
    return {
      name: "",
      age: "",
      textValue: "",
      hobby: ""
    };
  },
  methods: {
    nameValue: function() {
      this.name = this.$refs.name.value;
    }
  },

  watch: {
    textValue: function(value, oldValue) {
      console.log(value);
      this.hobby = value;
    }
  }
};
</script>   


<style scoped>
</style>