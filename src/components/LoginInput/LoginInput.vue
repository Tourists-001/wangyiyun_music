<template>
	<div class="loginInput_page">
		<div class="input">
			<div class="input_item">
				<van-icon name="phone-o" />
				<p>+86</p>
				<input
					type="number"
					placeholder="输入手机号"
					v-model="phone"
					@input="checkPhone"
				/>
			</div>
			<div class="input_item">
				<van-icon name="filter-o" />
				<input
					type="password"
					placeholder="输入密码"
					v-model="password"
					@input="checkPassword"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			phone: '',
			password: '',
			timer: null,
			login: [false, false],
		}
	},
	methods: {
		checkPhone() {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
				if (this.phone == '') {
					this.$toast('请输入手机号')
					this.login[0] = false
				}
				if (!reg.test(this.phone)) {
					this.$toast('请输入正确的手机号')
					this.login[0] = false
				}
			}, 1000)
			this.login[0] = true
		},
		checkPassword() {
			clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				if (this.password == '' || this.password.length < 5) {
					this.login[1] = false
					this.$toast('请输入密码')
				} else {
          }
			}, 1000)
					this.login[1] = true
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.loginInput_page {
	background-color: #fbfbfb;
	.input {
		.cl();
		top: 20px;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		top: 10%;
		user-select: none;
		& div,
		p,
		input {
			display: inline;
			border: none;
		}
	}
}
.input_item {
	width: 233px;
	background-color: #f2f2f2;
	// box-sizing:border-box;
	height: 30px;
	margin: 10px;
	padding: 10px 7px 0 15px;
	display: flex;
	justify-content: center;
	border-radius: 37px;
	border: 1px solid #fbfbfb !important;
	& p {
		font-size: 14px;
		font-weight: 300;
		margin-right: 13px;
		margin-left: 5px;
	}
	& input {
		background-color: #f2f2f2;
		width: 170px;
	}
	& input::-webkit-input-placeholder {
		color: #aab2bd;
		font-size: 14px;
		// margin-left: 20px;
	}
}
</style>
