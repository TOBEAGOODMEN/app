<template>
    <div>
        
        <div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<router-link class="mui-navigate-right" to="/search/account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="">
									<div class="mui-media-body">
										Hello 陈曦
										<p class='mui-ellipsis'>账号:陈曦</p>
									</div>
								</router-link>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<router-link to="/search/account" class="mui-navigate-right">账号与安全</router-link>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<router-link to="/search/notice" class="mui-navigate-right">新消息通知</router-link>
							</li>
							<li class="mui-table-view-cell">
								<router-link to="/search/pricacy" class="mui-navigate-right">隐私</router-link>
							</li>
							<li class="mui-table-view-cell">
								<router-link to="/search/general" class="mui-navigate-right">通用</router-link>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<router-link to="/search/set" class="mui-navigate-right">关于APP <i class="mui-pull-right update">V5.2.1</i></router-link>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;" @click="up()">
								<a>退出登录</a>
							</li>
						</ul>
					</div>
				</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
		return {
			
		}
	},
	methods:{
		up(){
			Toast({
  message: '退出成功'
 
});
		}
	}
}
</script>
<style lang="scss" scoped>
.mui-scroll-wrapper{
    top:40px;

}
</style>
