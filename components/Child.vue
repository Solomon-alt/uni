<template>
	<view>
		子组件
		<button @click="handle">按钮</button>
		<button @click="handleClick">发请求</button>
	</view>
</template>

<script>
	export default{
		methods:{
			handle(){
				uni.showToast({
					title:'提示',
					icon:'loading'
				})
			},
			
			//发请求
			handleClick(){
				uni.showLoading({
					title:'加载中...'
				})
				uni.request({
					url: '',
					method: 'GET', //请求方法
					data: {},//传参例如post请求 username：this.username
					success: res => {},  //等同于.then
					fail: () => {},    // 等同于.catch
					complete: () => {
						uni.hideLoading()
					}  //不论成功与失败都会进入 uni.hideloading()写在这里面
				});
			}
		}
	}
</script>

<style>
</style>
