<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（最多BB120个字）" maxlength ="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="newComment">发表评论</mt-button>
        
        <div class="comment-list">
            <div class="comment-item" v-for="(item,i) in commentlist" :key="item.id">
                <div class="comment-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="comment-body">
                    {{item.content==='undefined'?"此用户很懒，并不想和你说话" :item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">展开更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
      return {
          msg:"",
          pageindex:1,
          commentlist:[]
      }
  },
  created(){
      this.getComments()

  },
 methods: {
     
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
                if(result.body.status===0){
                    this.commentlist =this.commentlist.concat(result.body.message)
                }else{
                    Toast('获取评论失败！')
                }
            })
        },

         getMore(){
       this.pageindex++,
       this.getComments()
   },
   newComment(){
       if(this.msg.trim().length===0)
   {
      return Toast('评论内容不能为空')
       
   }
   this.$http.post('api/postcomment/'+this.id,{content:this.msg.trim()}).then(result=>{
       if(result.body.status===0){
           var cmt={
               user_name:"匿名用户",add_time:Date.now(),content:this.msg.trim()
           }
           this.commentlist.unshift(cmt)
           this.msg=""

       }else{
          Toast('评论未加载成功')
       }
   })
   }
  },
  
  
  props:["id"]
}
</script>
<style lang="scss" scoped>
.comment-container {
    h3 {
        font-size: 18px;
    }
    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .comment-list {
        margin: 5px 0;
        .comment-item{
            font-size: 13px;
            .comment-title{
                line-height: 35px;
                background-color: #ccc;


            }
            .comment-body{
                line-height: 35px;
                text-indent: 2em;

            }
        }
    }
}
</style>
