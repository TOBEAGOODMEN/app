<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time}}</span>
            <span>点击 ：{{photoinfo.click}}次</span>
        </p>
        <hr>
        <div class="miniatrue">
            <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
        </div>
        <div class="content" v-html="photoinfo.content"></div>
        <comment-box :id="id"></comment-box>

    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            photoinfo:{},
            list: [],
           
    }
        
    },
    created(){
        this. getPhotoInfo(),
        this.getMiniatrue()
    },
    methods: {
        getPhotoInfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.body.status===0){
                    this.photoinfo=result.body.message[0]
                }

            }
            )
        },
        getMiniatrue(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(item => {
                        item.w=600,
                        item.h=400
                    })
                    this.list=result.body.message
                }
            })
        },
       
        // 即将关闭的时候，调用这个处理函数
         closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
    }

    },
    components:{'comment-box':comment}
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    padding:3px;
    h3{
    color:#26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
    }
    .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    }
    .content {
        font-size: 13px;
        line-height: 30px;
    }
}
</style>
