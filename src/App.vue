<template>
	<div id="app">
      <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>

import { checkLoginStatus } from '@/api/userInfo';
export default {
 async created() {
    // const uid = getStore('uid')
    const res = await checkLoginStatus()
    console.log(res);
    if(res.code === 200) {
      this.$router.push('home')
    }
  }
}
</script>
<style lang="less">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
