<template>
	<div class="search_page">
		<HeadTop />
		<SideBar/>
	</div>
</template>

<script>
import HeadTop from '@/components/HeadTop/HeadTop.vue'
import SideBar from '@/views/SideBar/SideBar.vue'

export default {
	components: {
		HeadTop,
		SideBar,
	},
  methods: {
      handleClick() {
        this.$bus.$emit('HidleSideBar')
  }
  }
}
</script>

<style lang="less" scoped>
.search_page {
	/* transform: translateX(-200px); */
	background-color: #eeeff1;
	transition: all 0.5s ease-out;
	width: 100vw;
	height: 100vh;
}

</style>
