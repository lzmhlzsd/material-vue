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
Vue.use(VueResource);



const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [{
        path: '/',
        component: require('./../components/Login.vue')
        // beforeEnter: (to, from, next) => {  
        //     console.log(31)
        //     next()
        // }
    },
    { path: '/index', component: require('./../components/Index.vue')},
    { path: '/latest', component: require('./../components/Latest.vue')},
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
