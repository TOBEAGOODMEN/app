<template>
    <div>
        <div class="mui-scroll">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell mui-plus-visible mui-stream-hidden">
								<a id="rate" class="mui-navigate-right">评分鼓励</a>
							</li>
							<li class="mui-table-view-cell mui-plus-visible">
								<a id="welcome" class="mui-navigate-right">欢迎页</a>
							</li>
							<li class="mui-table-view-cell mui-plus-visible">
								<a id="share" class="mui-navigate-right">分享推荐</a>
							</li>
							<li class="mui-table-view-cell" @click="up()">
								<a id="tel" class="mui-navigate-right">客服电话</a>
							</li>
							<li class="mui-table-view-cell">
								<router-link id="feedback-btn" to="/search/safe" class="mui-navigate-right">问题反馈</router-link>
							</li>
							<li id="check_update" class="mui-table-view-cell mui-plus-visible">
								<a id="update" class="mui-navigate-right">检查更新</a>
							</li>
						</ul>
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
            Toast('电话已欠费')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
