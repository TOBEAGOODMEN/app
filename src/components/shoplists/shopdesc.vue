<template>
    <div>
     <h3 class="descInfo-container">{{descInfo.title}}</h3>
     <hr>
     <div class="content" v-html="descInfo.content"></div>  
    </div>
</template>
<script>
export default {
    data() {
        return {
            descInfo:{}
        }
    },
    created(){
        this.getDesc()
    },
    methods:{
        getDesc(){
            this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                if(result.body.status===0){
                    this.descInfo=result.body.message[0]
                }
            })
        }
    }
}
</script>
<style lang="scss" >
.descInfo-container{
    font-size: 16px;
    color: #226aff;
    text-align: center;
}
.content {
    img {
        padding: 4px;
        width: 100%;
    }
}
</style>
