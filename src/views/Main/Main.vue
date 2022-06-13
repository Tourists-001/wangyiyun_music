<template>
	<div class="main_page">
		<div class="main_img"></div>
		<div class="btn_group">
			<button class="btn_login" @click="goLogin">手机号登录</button>
			<button class="btn-regist" @click="goLogin('regist')">注册</button>
		</div>
		<div class="checkbox">
			<van-checkbox
				v-model="checked"
				icon-size="12px"
				@change="ChangeCheckBox"
			></van-checkbox>
		</div>
		<div class="care_list">
			同意
			<a
				href="https://st.music.163.com/official-terms/service"
				style="color: #fff"
			>
				《服务条款》
			</a>
			<a
				href="https://st.music.163.com/official-terms/privacy"
				style="color: #fff"
			>
				《隐私政策》
			</a>
			<!-- <a  style="color: #fff">《儿童隐私政策》</a> -->
		</div>
		<div class="icon_list">
			<MyIcon type="weixin" style="color: #fff" @handleIcon="handleIcon"></MyIcon>
			<MyIcon type="qq" style="color: #fff" @handleIcon="handleIcon"></MyIcon>
			<MyIcon type="weibo" style="color: #fff" @handleIcon="handleIcon"></MyIcon>
			<MyIcon type="wangyi" style="color: #fff" @handleIcon="handleIcon"></MyIcon>
		</div>
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
			checked: false,
			show: false,
		}
	},
	methods: {
		ChangeCheckBox() {
			if (this.checked) {
				this.show = false
			}
		},
		goLogin(flag) {
			if (this.checked) {
				if (flag === 'regist') {
					this.$router.push('/register')
				} else {
					this.$router.push('/login')
				}
			} else {
				this.$toast('请先同意以下条款')
				this.show = true
			}
		},
		handleIcon() {
			if (this.checked) {
				this.$toast('没有接口')
			} else {
				this.$toast('请先同意以下条款')
			}
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.main_page {
	width: 100vw;
	height: 100vh;
	background-color: @color;
}
.main_img {
	.self-center();
	top: 40%;
	.wh(80px,80px);
	background: url('~@/assets/bg.png') no-repeat center;
	background-size: 50px 50px;
	background-color: @primary;
	border-radius: 50%;
}
.btn_group {
	.self-center();
	display: flex;
	top: 70%;
	justify-content: center;
	flex-direction: column;
	& button {
		margin: 10px 0;
		border: none;
		width: 250px;
		height: 40px;
		border-radius: 30px;
	}
	.btn_login {
		background-color: #fff;
		color: #da4545;
		font-weight: 600;
	}
	.btn-regist {
		background-color: @color;
		color: #fff;
		border: 1px solid;
	}
}
.checkbox,
.care_list {
	.self-center();
	top: 82%;
	width: 250px;
	font-size: 0.001rem;
	// margin-left: 30px;
}
.care_list {
	width: 200px;
	top: 82%;
	// left: 45%;
	color: rgb(252, 150, 134);
	// margin-left: 30px;
}
.icon_list {
	.self-center();
	top: 90%;
	display: flex;
	justify-content: space-around;
	width: 250px;
	& i {
		font-size: 30px;
	}
}
</style>
