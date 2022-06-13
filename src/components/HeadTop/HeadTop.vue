<template>
	<div class="head_top">
		<van-icon name="search" class="search_icon" />
		<input type="text" placeholder="请输入内容" />
		<van-icon name="scan" class="scan_icon" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="less">
.head_top {
  user-select: none;
	position: fixed;
	display: flex;
	background-color: #eeeff1;
	width: 100vw;
	height: 40px;
	//  box-sizing: border-box;
	& input {
		border: none;
		background-color: #f7f7f7;
		// border-radius: 30px;
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
		border: 1px solid #e8ecef;
		padding: 4px 20px;
		margin-left: -1px;
		height: 25px;
		margin-top: 5px;
		width: 218px;
	}
	& input::-webkit-input-placeholder {
		margin-left: 20px;
	}
}
.search_icon {
    display: block;
    font-size: 26px;
    color: #c2c5c4;
    height: 34px;
    margin-left: 57px;
    width: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #f7f7f7;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-top: 6px;
}
.right_icon {
	margin: 0 8px;
	height: 40px;
}
.scan_icon {
    margin-top: 10px;
    font-size: 26px;
    margin-left: 16px;
    margin-right: 10px;
}
.van-tabbar-item__icon .van-icon {
	display: block;
	margin-top: 10px;
	color: #37393a;
}
.van-tabbar-item .van-info {
	margin-top: 11px;
}
</style>
