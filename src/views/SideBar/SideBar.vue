<template>
  <div class="sideBar_page">
    div
  </div>
</template>

<script>
export default {
  methods: {
    hiddSiderbar() {
      console.log(event);
    }
  }

}
</script>

<style lang="less">
.sideBar_page {
  transform: translateX(-80vw);
  transition: all 0.5s ease-out;
  width: 80vw;
  height: 100vh;
  // border: 1px solid red;
  z-index: 200;
}
</style>