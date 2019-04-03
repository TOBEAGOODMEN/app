<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" @click="count++">
					<a href="https://mp.weixin.qq.com/s/uqQ4141ywt_zbewStFjTiA">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>比喜欢更深的中意</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年3月12日</span>
                                <span>点击次数 ：{{count}} 次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="https://mp.weixin.qq.com/s/yF6gc_P2r5l__B4wlz7IMg">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>雪气</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年3月15日</span>
                                <span>点击次数 ：0 次</span>
                                </p>
						</div>
					</a>
					
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="https://mp.weixin.qq.com/s/V6PI2hXddejC_bULE7tXag">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>实实在在的一点曙光，更有千万焦虑在</h1>
                
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年3月28日</span>
                                <span>点击次数 ：0 次</span>
                            </p>
						</div>
					</a>
				</li>

				<li class="mui-table-view-cell mui-media">
					<a href="https://mp.weixin.qq.com/s/yHf1mKqZir8fTWXNkas33w">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>爸爸是个很好的人</h1>
                
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年4月5日</span>
                                <span>点击次数 ：0 次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="https://mp.weixin.qq.com/s/VmwqnVnUO0YzqrBKaRJJKw">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>山水记</h1>
                
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年4月7日</span>
                                <span>点击次数 ：0 次</span>
                            </p>
						</div>
					</a>
				</li>
<li class="mui-table-view-cell mui-media">
					<a href="https://mp.weixin.qq.com/s/K-p5j5VJuPS1GaviTPlvfQ">
						<img class="mui-media-object mui-pull-left" src="../../image/xixi.jpg">
						<div class="mui-media-body">
							<h1>自我救赎</h1>
                
							<p class='mui-ellipsis'>
                                <span>发表时间 ：2016年5月28日</span>
                                <span>点击次数 ：0 次</span>
                            </p>
						</div>
					</a>
				</li>


			</ul>
    </div>
</template>
<script>
export default {
    data() {
		return {
			count:0
		}
	},
	methods:{

	}
}
</script>
<style lang="scss" scoped>
.mui-table-view{
    li {
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
