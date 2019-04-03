<template>
    <div class="mui-numbox" data-numbox-min='1' >
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="getChangeCount" ref="numbox" />
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
    // watch: {
    //     value:function (newval,oldval) {
            
    //         this.getChangeCount()
    //     }
    // },
    methods:{
        getChangeCount(){
            this.$emit("getCount",parseInt(this.$refs.numbox.value))
        }
 
    },
    mounted(){
        mui('.mui-numbox').numbox()
    },
    props:["max"],
    watch: {
        'max':function(newVal,oldVal){
            mui('.mui-numbox').numbox().setOption("max",newVal)
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
