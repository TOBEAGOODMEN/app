<template>
<div class="shop-container">
    <div class="shoplist">
    <div class="mui-card" v-for="(item,i) in shopinfo" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch  v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numberbox :num="$store.getters.getOneCount[item.id]" :shopid="item.id"></numberbox>
                                <a href="#" @click.prevent="reMove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
    </div>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总价(不含运费)</p>
                            <p>已选购商品<span class="money">{{$store.getters.getAllMoney.count}}</span>件，总价￥<span class="money">{{$store.getters.getAllMoney.money}}</span></p>
                        </div>
                         <mt-button type="danger">去结算</mt-button>
					</div>
                   
				</div>
                
	</div>

	</div>
   
</div>
</template>
<script>
import shopcarnumber from '../subcomponents/shopcarnumber.vue'
export default {
    data() {
        return {
            shopinfo:[]
        }
    },
    created(){
        this.getshoplist()
    },
    methods:{
        getshoplist(){
            var idArr=[]
            this.$store.state.car.forEach(item => {idArr.push(item.id)});
            if(idArr.length<=0){
                return
            }
            this.$http.get('api/goods/getshopcarlist/'+idArr.join(",")).then(result=>{
                if(result.body.status===0){
                    this.shopinfo=result.body.message
                }
            })
        },
        reMove(id,index){
            this.shopinfo.splice(index,1),
            this.$store.commit('remove',id)
        },
        selectedChange(id,val){
            console.log(id+'---'+val)
            this.$store.commit('updataSelected',{id,selected:val})
        }

    },

    components:{
        'numberbox':shopcarnumber
    }
}
</script>
<style lang="scss" scoped>
.shop-container{
    
    background-color: #eee;
    overflow: hidden;
    .shoplist{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
img{
            height: 60px;
            width: 60px;
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1{
                font-size: 13px;
            }
            .price{
                color:red;
                font-weight: bold;
            }
        }
        }
        
    }
}
.jiesuan{
display: flex;
justify-content: space-between;
align-items: center;
.money {
    color:red;
    font-weight: bold;
    font-size: 16px;
}
}
</style>
