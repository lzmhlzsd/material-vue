//es6语法：
import Vue from 'vue';
import App from './../components/App';



Vue.config.debug = true; //开启错误提示
window.onload = function() {
    new Vue({
        el: '#app',
        components: {
        	app: App
        }
    });
}
