<template>
	<div class="nikname_page">
		<div class="">
			<van-field
				v-model="value"
				label="昵称"
				placeholder="请输入昵称"
				class="input"
			/>
		</div>
		<div
			class="recommend_name"
			v-if="candidateNicknames"
			:style="{
				transform: `translateY(${Divheight})`,
				transition: 'all 1s ease-out',
			}"
			:class="{ active: loading }"
		>
			<ul>
				<li class="recommend_title">昵称重复，从下面选择一个吧</li>
				<li
					v-for="(item, i) in candidateNicknames"
					:key="i"
					@click="changeNikName(item)"
				>
					{{ item }}
				</li>
			</ul>
		</div>
		<van-button round color="#ee0800" class="button" @click="goApp">
			进入网易云
		</van-button>
	</div>
</template>

<script>
import { CheckNickname } from '@/api/userInfo'
import { mapMutations, mapState } from 'vuex'
import { regiset } from '@/api/userInfo'
export default {
	name: 'setNikName',
	data() {
		return {
			value: '',
			candidateNicknames: '',
			loading: false,
		}
	},
	computed: {
		...mapState(['phone', 'password', 'captcha']),
		Divheight() {
			if (this.candidateNicknames != []) {
				const lan = this.candidateNicknames.length + 2
				const height = -(lan * 35) + 'px'
				return height
			}
			return 0
		},
	},
	methods: {
		...mapMutations(['saveInfo', 'saveUid']),
		async goApp() {
			if (this.value) {
				const res = await CheckNickname(this.value)
				console.log(res)
				if (res.duplicated && res.candidateNicknames) {
					this.loading = true
					this.candidateNicknames = res.candidateNicknames.splice(
						2,
						res.candidateNicknames.length - 1,
					)
				} else {
					this.login()
				}
			}
		},
		changeNikName(name) {
			this.value = name
			this.loading = false
		},
		async login() {
			this.saveInfo({
				phone: this.phone,
				password: this.password,
				captcha: this.captcha,
				nickname: this.value,
			})
			const res = await regiset({
				phone: this.phone,
				password: this.password,
				captcha: this.captcha,
				nickname: this.value,
			})
			if (res.code === 200) {
				this.saveUid(res.account.id)
				this.$router.push('/home')
			}
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.nikname_page {
	width: 100vw;
	height: 100vh;
	background-color: @color;
}
.recommend_name {
	// transform: translateY(-253px);
	transition: all 0.5s ease-out;
	background-color: #ffffff;
	& .recommend_title {
		font-size: 14px;
	}
	& li {
		height: 20px;
		// text-decoration: ;
		// padding-bottom:10px;
		border-bottom: 1px solid #eee;
		margin-bottom: 15px;
		text-align: center;
		line-height: 20px;
	}
}
.active {
	transform: translateY(0) !important;
	transition: all 1s ease-out;
}
.button {
	.self-center();
	top: 60%;
}
</style>
