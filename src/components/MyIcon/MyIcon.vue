<template>
<div class="icon_page">
  <i class="iconfont icon-container" :class="fontClass" @click="handleIcon"></i>
</div>
</template>

<script>
const classMap = {
  weibo: "icon-xinlangweibo",
  weixin: "icon-weixin",
  qq: "icon-qq",
  wangyi: "icon-pinpaibiaoshi_wangyiyouxiang",
  search: 'icon-wangyiyunyinle',
  boke: 'icon-guanzhu1',
  wode: 'icon-yinle',
  guanzhu: 'icon-guanzhu',
  yuncun: 'icon-map'
};
export default {
  name: 'MyIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
  methods: {
    handleIcon() {
      this.$emit('handleIcon')
    }
  }
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_3456375_ig57wjfy11.css";
.iconfont {
    // color: #fff;
    font-size: 20px;
}
.icon_page {
  // background-color: #fff;
  border-radius: 50%;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
</style>
