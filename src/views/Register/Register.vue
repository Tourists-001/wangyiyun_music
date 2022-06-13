<template>
	<div class="register_page">
		<LoginInput ref="loginInput" />
		<div class="register_btn">
			<button class="go_back" @click="$router.go(-1)">返回</button>
			<button class="register" @click="registBtn" :class="{active: falg}">注册</button>
		</div>
		<div class="icon_list">
			<MyIcon type="weixin"></MyIcon>
			<MyIcon type="qq"></MyIcon>
			<MyIcon type="weibo"></MyIcon>
			<MyIcon type="wangyi"></MyIcon>
		</div>
	</div>
</template>

<script>
import LoginInput from '@/components/LoginInput/LoginInput.vue'
import MyIcon from '@/components/MyIcon/MyIcon.vue'
import { mapMutations } from 'vuex'
import {reqCode} from '@/api/userInfo.js';
export default {
	components: {
		LoginInput,
		MyIcon,
	},
  data() {
    return {
      falg: false,
    }
  },
	methods: {
		...mapMutations(['saveInfo']),
	  async	registBtn() {
			const login = this.$refs.loginInput.login
			const password = this.$refs.loginInput.password
			const phone = this.$refs.loginInput.phone
			this.falg = !login.includes(false)
			if (this.falg) {
				this.saveInfo({phone, password})
        const res =  await reqCode(phone)
        if(res.data) {
          this.$router.push('/code')
        } else {
          this.$toast(res.message)
        }
			}
		},
	},
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.register_page {
	width: 100vw;
	height: 100vh;
}
.register_btn {
	.self-center();
	top: 40%;
	width: 250px;
	display: flex;
	justify-content: space-between;
	& button {
		border: 1px solid #f78789;
		background-color: #fbfbfb;
		padding: 5px 40px;
		font-size: 10px;
		border-radius: 30px;
		color: #f78789;
		font-weight: bold;
	}
	& .register {
		background-color: #f78789;
		color: #fbfbfb;
	}
}
.icon_list {
	.self-center();
	top: 90%;
	display: flex;
	justify-content: space-around;
	width: 250px;
	& i {
		font-size: 30px;
		color: #979797;
	}
}
.active {
  background-color: @color;
}
</style>
