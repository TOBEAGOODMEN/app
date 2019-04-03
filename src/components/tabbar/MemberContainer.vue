<template>
    <div>
		<h1>这是第{{current_page}}页</h1>
  <div>
	  <div class="page">
		 <ul class="pagelist">
			 
			 
			 <li class="jumpText" @click="current_page>1?current_page--:''">上一页</li>
			 <li class="jumpNum" v-show="current_page>5" @click="jumpPage(1)">1</li>
			 <li class="ellipsis" v-show="efont">...</li>
			 <li class="jumpNum" v-for="num in indexs" :class="{bgprimary:current_page==num}" :key="num.id" @click="jumpPage(num)">{{num}}</li>
			 <li class="ellipsis" v-show="efontTail">...</li>
			 <li class="jumpNum" @click="jumpPage(pages)" v-show="current_page<this.pages-4">{{pages}}</li>
			 <li class="jumpText" @click="current_page<pages?current_page++:''">下一页</li>
			 
			 <li class="jumppoint">:跳转到</li>
			 <li  class="jumpinp"><input  type="number" style="height:50px;width:80px" v-model="changePage"></li>
			 <li class="jumpBtn" @click="jumpPage(changePage)">go</li>

		 </ul>
	  </div>
  </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
	data() {
		return {
			pages:50,
			current_page: 1,
			changePage:''
		}
	},
	computed:{
		efont: function() { 
	   if (this.pages <= 7) return false; 
	   return this.current_page>5
	   
       
	 }, 
	 efontTail:function(){
		 if(this.current_page>=this.pages-4) return false;
		 return true
	 },
		indexs: function() { 
 
       var left = 1, 
         right = this.pages, 
         ar = []; 
       if (this.pages >= 7) { 
         if (this.current_page > 5 && this.current_page < this.pages - 4) { 
           left = Number(this.current_page) - 3; 
           right = Number(this.current_page) + 3; 
         } else { 
           if (this.current_page <= 5) { 
             left = 1; 
             right = 7; 
           } else { 
             right = this.pages; 
 
             left = this.pages - 6; 
           } 
         } 
       } 
       while (left <= right) { 
         ar.push(left); 
         left++; 
       } 
       return ar; 
     }, 
	},
	methods:{
		jumpPage:function (id) {
			if(id<=this.pages&&id>0&&id%1==0){
			 this.current_page = id; }
			 else {
				 Toast('请输入正确的页码！')
			 }
		}
	}
}
</script>
<style lang="scss" scoped>
.page { 
  position: absolute;
  font-weight: 900; 
  
  text-align: center; 
  color: #888; 
  bottom: 70px;
  left: 30%;
  background: #f2f2f2; 
} 
 
.pagelist { 
  font-size: 0; 
  background: #fff; 
  height: 50px; 
  line-height: 50px; 
} 
 
.pagelist li { 
  font-size: 14px; 
  list-style-type: none;
  float: left;
  margin-right: 5px;
} 
 
.pagelist .jumpText,.jumpBtn{ 
	height: 50px;
	width: 60px;
	line-height: 50px;
  border: 1px solid #ccc; 
  
  
  border-radius: 4px; 
  cursor: pointer; 
  
  
} 
 .pagelist .jumpNum { 
	height: 50px;
	width: 40px;
	line-height: 50px;
  border: 1px solid #ccc; 
  
  
  border-radius: 4px; 
  cursor: pointer; 
  

} 
 .bgprimary { 
  cursor: default; 
  color: #fff; 
  background: #337ab7; 
  border-color: #337ab7; 
}
</style>
