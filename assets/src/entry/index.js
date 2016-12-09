//es6语法：
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from 'components/App'
import store from '../vuex/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'


Vue.config.debug = true; //开启错误提示
Vue.use(VueRouter)
Vue.use(MuseUI)



const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [{
        path: '/',
        component: require('./../components/Latest.vue'),
        beforeEnter: (to, from, next) => {
            console.log(3)
        }
    },
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
