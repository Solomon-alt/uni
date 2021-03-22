<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="flex">
			<view>
				123
			</view>
			<view>
				12345677721212
			</view>
		</view>
		<child></child>
		<msearch></msearch>
	</view>
</template>

<script>
	import child from '../../components/Child.vue'
	import msearch from '../../components/jm-search/jm-search.vue'
	export default {
		components:{
			child,msearch
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		//路由组件用小程序生命周期，一般组件用vue生命周期
		onLoad(options) {
			// uni.navigateTo({
			// 	url:`?`  
			// })//跳路由传值
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
