<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="num" @change="getChangeCount" ref="numbox" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    
    data() {
        return {
             
        }
    },
   
    methods:{
        getChangeCount(){
            this.$store.commit('updataToCar',{
                id:this.shopid,
                count:this.$refs.numbox.value
            })
        }
 
    },
    mounted(){
        mui('.mui-numbox').numbox()
    },
    props:["max","num","shopid"],
    watch: {
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption("max",newVal)
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
