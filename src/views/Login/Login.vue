<template>
	<div class="page_login">
		<LoginInput ref="loginInput" />
		<button class="btn" @click="show = true">点击滑动验证</button>
		<div class="puzzle-box">
			<puzzleVerification
				v-model="show"
				:puzzleImgList="puzzleImgList"
				blockType="puzzle"
				:onSuccess="handleSuccess"
			/>
		</div>
    <button class="login_btn" @click="handleLogin">登录</button>
	</div>
</template>

<script>
import LoginInput from '@/components/LoginInput/LoginInput.vue'
import { loginTo }  from '@/api/userInfo.js'
export default {
  name: 'Login',
	components: {
		LoginInput,
	},
	data() {
		return {
			puzzleImgList: [
				'https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg',
			],
			show: false,
      falg: false,
      isSlider: false,
		}
	},
	methods: {
		handleSuccess() {
      this.show = false
      this.isSlider = true
    },
		handleError() {},
    async handleLogin() {
			const login = this.$refs.loginInput.login
			const password = this.$refs.loginInput.password
			const phone = this.$refs.loginInput.phone
			this.falg = !login.includes(false)
      if(this.falg && this.isSlider) {
        const res = await loginTo({phone,password})
        if(res.code == 200) {
          this.$router.push('/home')
        } else {
          this.$toast(res.message)
        }
      } else {
          this.$toast('请输入账号或密码')
      }
    }
	},
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.puzzle-box {
	.cl();
	margin-top: 40px;
}
.btn {
	.cl();
	top: 30%;
	height: 20px;
	width: 220px;
	border-radius: 20px;
	border: 1px solid @color;
	background-color: #fff;
	// color: #fff;
	font-weight: bold;
	font-size: 12px;
}
.show {
	display: block !important;
}
.login_btn {
  	.cl();
	top: 40%;
	height: 40px;
	width: 220px;
	border-radius: 20px;
	border: 1px solid @color;
	background-color: @color;
	color: #fff;
	font-weight: bold;
	font-size: 12px;
}
</style>
