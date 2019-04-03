<template>
    <div class="shopinfo">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-swipe :auto="4000">
                            <mt-swipe-item v-for="item in lunboinfo" :key="item.src"><img :src="item.src" alt=""></mt-swipe-item>
                        </mt-swipe>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">{{goodsinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}</span>
                        </p>
                        <p>购买数量:<number-box @getCount="getselectedCount" :max="goodsinfo.stock_quantity"></number-box></p>
                        <p>
                            <mt-button type="primary" size="small">立刻购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
				
			</div>
			
			<div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>商品货号：{{goodsinfo.goods_no}}</p>
                        <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
                        <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
					
                            <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                            <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
                      
					</div>
				</div>
				
			</div>
    </div>
</template>
<script>
import number from './shopnumber.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lunboinfo:[],
            goodsinfo:{},
            selectedCount:1,
            ballFlag:false,
        }
    },
    created(){
        this.getlunbo(),
        this.getlistinfo()
    },
    methods: {
        getlunbo(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.lunboinfo=result.body.message
                }
            })
        },
         getlistinfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.goodsinfo=result.body.message[0]
                }
            })
        },
        addToShopCar(){
            this.ballFlag=!this.ballFlag
             

            var carInfo= {
                id:this.id,
                count:this.selectedCount,
                price:this.goodsinfo.sell_price,
                selected:true,
                
            }
            this.$store.commit('addToCar',carInfo)


        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth
            const ballPosition=this.$refs.ball.getBoundingClientRect();
            const badgePosition=document.getElementById("badge").getBoundingClientRect();
            const xDist=badgePosition.left-ballPosition.left
            const yDist=badgePosition.top-ballPosition.top
            el.style.transform= `translate(${xDist}px,${yDist}px)`
            el.style.transition="all 0.2s cubic-bezier(0,0,.25,1)"
            done()
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag

        },
        goDesc(id){
            this.$router.push({ name:'shopdesc',params:{id}})

        },
        goComment(id){
            this.$router.push({ name:'shopcomment',params:{id}})
        },
         getselectedCount(count){
            this.selectedCount=count;
            console.log('父组件拿到的值为'+this.selectedCount)
        },
    },
    components:{'number-box':number}
}
</script>
<style lang="scss" scoped>
.shopinfo{
    background-color: #eee;
    overflow: hidden;
    .now_price {
        color: red;
        font-size: 16px;
    }
    .mint-button {
        margin:15px 0;
    }
}
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        text-align: center;
    }
    img {
        width: 50%;
        height: 100%;
    }
}
.ball{
    width: 15px;
    height: 15px;
    background-color:red;
    border-radius: 50%;
    position:absolute;
    z-index: 99;
    top: 408px;
    left:138px;
    
}
</style>
