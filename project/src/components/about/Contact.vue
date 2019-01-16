<template>
    <div class="contact">
    <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h2 class="card-title">联系我们</h2>
      <p class="card-text">1241860821@qq.com</p>
      <router-link  :to="{name:'phonenumber'}" class="">Phone</router-link>
      <router-link  :to="{name:'personname'}">PersonName</router-link>
      <router-view></router-view>
    </div>
    </div>
    </div>
</template>