<template>
	<div class="code_page">
		<div class="title_area">
			<h4>手机号验证码</h4>
			<p>为了安全我们会向你的手机发送验证码</p>
		</div>
		<div class="code_input">
			<!-- 密码输入框 -->
			<van-password-input
				:value="value"
				:focused="showKeyboard"
				length="4"
				:gutter="10"
				:mask="false"
				@focus="showKeyboard = true"
			/>
		</div>
		<!-- 数字键盘 -->
		<van-number-keyboard
			v-model="value"
			:show="showKeyboard"
			@blur="showKeyboard = false"
		/>
		<p class="time_out" :class="{active: show}" @click="sendCode">重新发送({{ count }})</p>
    <Loading class="loading" v-show="show && count != 0"/>
	</div>
</template>

<script>
import Loading from '@/components/Loading/Loading.vue'
import { checkCode,reqCode } from '@/api/userInfo';
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Checkcode',
  components: {
    Loading,
  },
	data() {
		return {
			value: '',
			showKeyboard: true,
			timer: null,
			count: 60,
      show: false,
		}
	},
	created() {
    this.setTime()
  },
  computed: {
    ...mapState(['phone','password']),
  },
	methods: {
    ...mapMutations(['saveInfo']),
		setTime() {
			this.timer = setInterval(() => {
				this.count--
        if(this.count === 0) {
          clearInterval(this.timer)
          this.count = 0
          this.show = true
        }
			}, 1000)
		},
    async verifyCode() {
    try {
      const res = await checkCode({phone:this.phone,captcha:this.value})
      if(res.data) {
        this.saveInfo({phone:this.phone,password:this.password, captcha:this.value})
        this.$router.push('/nikname')
      }
    } catch(err) {
      this.$toast('验证码错误')
    }
    },
    async sendCode() {
      if(this.show && this.phone) {
        this.count = 60
        this.setTime()
        // this.show = false
        const res = await reqCode(this.phone)
        console.log(res)
      } else {
        this.$toast('等倒计数结束重试')
      }
    }
	},
  watch: {
    value(newVal) {
        if(newVal.length == 4 && this.phone) {
            this.verifyCode()
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';

.code_page {
	width: 100vw;
	height: 100vh;
	background-color: #f7f7f7;
}
.title_area {
	.self-center();
	top: 22%;
	& h4 {
		text-align: center;
	}
	& p {
		font-size: 10px;
		width: 207px;
	}
}
.code_input {
	.self-center();
	top: 40%;
	width: 240px;
}
.time_out {
	.self-center();
	font-size: 14px;
	// color: #fff;
}
.active{
	color: #000;
  font-weight: bold;
}
.loading {
  .self-center();
  // width: 10px;
  // height: 10px;
  top: 60%;
}
</style>
