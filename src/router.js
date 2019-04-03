import VueRouter from 'vue-router'





import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShoppingcarContainer from './components/tabbar/ShoppingcarContainer.vue'
import Newslist from './components/news/Newslist.vue'
import Photo from './components/Growth/Photo.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Travel from './components/life/Travels.vue'
import photoinfo from './components/Growth/photoinfo.vue'
import shoplist from './components/shoplists/shoplist.vue'
import shopinfo from './components/shoplists/shopinfo.vue'
import shopdesc from './components/shoplists/shopdesc.vue'
import shopcomment from './components/shoplists/shopcomment.vue'
import Problem from './components/problems/problem.vue'
import us from './components/we/us.vue'
//登陆界面
import account from './components/ladings/Account.vue'
import general from './components/ladings/General.vue'
import notice from './components/ladings/Notice.vue'
import pricacy from './components/ladings/Pricacy.vue'
import safe from './components/ladings/Safe.vue'
import set from './components/ladings/Set.vue'
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shoppingcar', component: ShoppingcarContainer },
        { path: '/home/Newslist', component: Newslist },
        { path: '/home/Newsinfo/:id', component: Newsinfo },
        { path: '/home/photos', component: Photo },
        { path: '/home/travel', component: Travel },
        { path: '/home/problems', component: Problem },
        { path: '/home/photoinfo/:id', component: photoinfo },
        { path: '/home/shoplist', component: shoplist },
        { path: '/home/us', component: us },
        { path: '/home/shopinfo/:id', component: shopinfo },
        { path: '/home/shopdesc/:id', component: shopdesc, name: 'shopdesc' },
        { path: '/home/shopcomment/:id', component: shopcomment, name: 'shopcomment' },
        //登陆界面
        { path: '/search', component: SearchContainer },
        { path: '/search/account', component: account },
        { path: '/search/general', component: general },
        { path: '/search/notice', component: notice },
        { path: '/search/pricacy', component: pricacy },
        { path: '/search/', component: SearchContainer },
        { path: '/search/safe', component: safe },
        { path: '/search/set', component: set },
    ],
    linkActiveClass: 'mui-active'
})
export default router