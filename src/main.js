import Vue from 'vue'
//按需导入mint-ui组件
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';


// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

// Vue.use(Lazyload);


//全部导入mint
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addToCar(state, carInfo) {
            var flag = false;
            state.car.some(item => {
                if (item.id == carInfo.id) {
                    item.count += parseInt(carInfo.count)
                    item.price += parseInt(carInfo.price)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(carInfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updataToCar(state, carInfo) {
            state.car.some(item => {
                if (item.id == carInfo.id) {
                    item.count = parseInt(carInfo.count)

                    return
                }

            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updataSelected(state, carInfo) {
            state.car.some(item => {
                if (item.id == carInfo.id) {
                    item.selected = carInfo.selected
                    return
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        remove(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)

                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getAllCount(state) {
            var c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getOneCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getAllMoney(state) {
            var m = { count: 0, money: 0 }

            state.car.forEach(item => {
                if (item.selected) {
                    m.count += item.count,
                        m.money += item.price * item.count
                }
            })


            return m
        },
        getGoodsSelected(state) {
            var s = {}
            state.car.forEach(item => {
                s[item.id] = item.selected
            })
            return s
        }
    }
})

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入时间插件
import moment from 'moment'


//定义全局过滤器
Vue.filter('dateFormat', function(datastr, pattern = "YYYY-MM-DD HH-mm-ss") {
        return moment(datastr).format(pattern)
    })
    //导入 vue-preview 
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
    //导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;




//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})