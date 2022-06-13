<template>
	<div class="home_page" :class="{ active: active }">
    		<div class="r_icon" @click="showSideBar">
			<van-tabbar :fixed="false" class="right_icon">
				<van-tabbar-item
					icon="exchange"
					badge="20"
					style="background-color: #e8ecef"
				></van-tabbar-item>
			</van-tabbar>
		</div>
		<div class="tabbar">
			<Tabbar></Tabbar>
		</div>
		<router-view>
    </router-view>
       <Loading :show="active" @handleLoading="handleLoading"/>
       
	</div>
</template>

<script>
import Tabbar from '@/components/Tabbar/Tabbar.vue'
import Loading from '@/components/Loading/Loading.vue'
export default {
	components: {
		Tabbar,
    Loading,
	},
	data() {
		return {
			active: false,
		}
	},
  	mounted() {
    this.$bus.$on('HidleSideBar',() => {
       this.active = false
    } )
	},
  methods: {
    showSideBar() {
      this.active = true
    },
    handleLoading() {
      event.stopPropagation();
      this.active = false
    }
  }
}
</script>

<style>
/* .mask {
position: relative;
    top: -101vh;
    width: 20vw;
    height: 101vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all .6s;
} */
.home_page {
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease-out;
  background-color: rgba(255, 255, 255, .1);
  z-index:400;
}
  .active {
	 transform: translateX(80vw);
  }
.r_icon {
  position: fixed;
  left:1px;
  z-index: 100;
}
.tabbar {
  height: 55px;
	width: 100vw;
	position: fixed;
	display: flex;
	bottom: 0;
  justify-content: space-between;
  background-color: #f8f8f8;
  border-top: 1px solid #f9f9f9;
}
</style>
