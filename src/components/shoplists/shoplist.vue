<template>
    <div class="sale-list">
        <router-link class="sale-item" v-for="item in shoplist" :key="item.id" :to="'/home/shopinfo/'+item.id">
            <img :src="item.img_url" alt="" >
            <h1 class="title">{{item.tilte}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
            
                </p>
            </div>
            
        </router-link>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex:1,
            shoplist:[]

        }
    },
    created(){
    this. getShoplist()
    },
    methods: {
        getShoplist(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.body.status===0){
                    this.shoplist=this.shoplist.concat(result.body.message)
                }
            })
        },
        getMore(){
            this.pageindex++
            this.getShoplist()

        }
    }
}
</script>
<style lang="scss" scoped>
.sale-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .sale-item {
        border: 1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        width: 49%;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }

            .price {
                .now {
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sale{
                display: flex;
                justify-content: space-between;
            }
            
        }
    }
}
</style>
