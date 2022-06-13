<template>
	<div class="loading_page" @click.self="handleLoading" :class="{hiddle:!show}">
	<van-loading type="spinner" size="24px" class="loading_icon"/>
	</div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    handleLoading() {
      event.stopPropagation()
      this.$emit('handleLoading')
    }
  }
}
</script>

<style lang="less">
@import '@/style/mixin.less';
.loading_page {
    position: relative;
    top: -101vh;
    width: 100vw;
    height: 101vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-out;
}
.hiddle {
  visibility: hidden;
  transition: all 0.3s ease-out;
}
.loading_icon {
   .self-center();
}
</style>
