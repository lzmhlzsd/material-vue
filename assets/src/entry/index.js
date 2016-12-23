//es6语法：
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'components/App'
//import App from 'components/Login'
import store from '../vuex/store'
import MuseUI from 'muse-ui'
import VueResource from 'vue-resource'
import 'muse-ui/dist/muse-ui.css'



Vue.config.debug = true; //开启错误提示
Vue.use(VueRouter)
Vue.use(MuseUI)
Vue.use(VueResource)


const routes = [{
        path: '/',
        component: require('./../components/Login.vue')
            // beforeEnter: (to, from, next) => {  
            //     console.log(31)
            //     next()
            // }
    },
    { path: '/index', component: require('./../components/Index.vue') },
    { path: '/cashier', component: require('./../components/Business/Cashier.vue') },
    { path: '/dynamic', component: require('./../components/Business/Dynamic.vue') },
    { path: '/hongbao', component: require('./../components/Business/Hongbao.vue') },
    { path: '/site', component: require('./../components/Business/Site.vue') },
    { path: '/store', component: require('./../components/Business/Store.vue') },
    { path: '/wechat', component: require('./../components/Business/Wechat.vue') },
    { path: '/latest', component: require('./../components/Latest.vue') },
    { path: '/all', component: require('./../components/All.vue') }
]


//创建vue-router实例
var router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
})



new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#root')
