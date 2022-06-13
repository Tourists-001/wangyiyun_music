<template>
	<div class="tabbar_page">
		<router-link
			v-for="(item, i) in items"
			:key="i"
			:to="{ name: item.name }"
			:exact="item.exact"
			active-class="selected"
			exact-active-class=""
		>
			<div class="icon">
				<MyIcon :type="item.icon" />
			</div>
			<span>{{ item.title }}</span>
		</router-link>
	</div>
</template>

<script>
import MyIcon from '@/components/MyIcon/MyIcon.vue'
export default {
	components: {
		MyIcon,
	},
	data() {
		return {
			items: [
				{
					name: 'Search',
					title: '搜索',
					icon: 'weixin',
					exact: false,
				},
				{
					name: 'Podcast',
					title: '微播',
					icon: 'weibo',
					exact: false,
				},
				{
					name: 'User',
					title: '我的',
					icon: 'qq',
					exact: false,
				},
				{
					name: 'Follow',
					title: '关注',
					icon: 'weixin',
					exact: false,
				},
				{
					name: 'Yuncun',
					title: '云村',
					icon: 'Search',
					exact: false,
				},
			],
		}
	},
	methods: {
		handleActive() {
			this.$emit('handleActive')
		},
	},
}
</script>

<style lang="less" scoped>
@import '@/style/mixin.less';
.tabbar_page {
	width: 100vw;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
  background-color: #f8f8f8;
  margin-top: 5px;
	span {
		height: 10px;
		display: block;
		font-size: 10px;
		text-align: center;
		margin-bottom: 5px;
		margin-top: -2px;
    color: #cbcbcb;
	}
}
.icon {
  & div {
    line-height: 32px;
  }
}
.selected {
  color: @primary;
  & span {
    color: @primary;
  }
}
</style>
