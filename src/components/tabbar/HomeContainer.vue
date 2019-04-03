<template>
<div>
    <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/Newslist">
            <img src="../../image/hot.jpg" alt="">
            <div class="mui-media-body">热点新闻</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photos">
            <img src="../../image/beautiful.jpg" alt="">
            <div class="mui-media-body">美图分享</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shoplist">
            <img src="../../image/3.jpg" alt="">
            <div class="mui-media-body">商品购买</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/problems">
            <img src="../../image/problem.jpg" alt="">
            <div class="mui-media-body">问题反馈</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/travel">
            <img src="../../image/article.jpg" alt="">
            <div class="mui-media-body">美文赏析</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/us">
            <img src="../../image/6.jpg" alt="">
            <div class="mui-media-body">关于我们</div></router-link></li>
		           
 </ul> 
  
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-image:url('../../image/time.jpg');
        }
        &:nth-child(2){
             background-image:url('../../image/autumn.jpg');
        }
        &:nth-child(3){
            background-image:url('../../image/Scorpio.jpg');
        }
    }
}
.mui-grid-view.mui-grid-9 {
    
    border:none;
   
    }
 .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}


</style>
