'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './vuex/store.js';
import routes from './router/route.js';
import axios from './common/axios.js';
import '../css/layout.css';
import '../css/iconfont/iconfont.css';

Vue.use(VueRouter);
Vue.use(axios);
Vue.mixin({
    changCur: function (target) {
        return new Promise( (resolve, reject) => {
            let cur = target.parentNode.getElementsByClassName('cur')[0];
            if(!!cur) this.removeClass(cur);
            if(cur == target) {
                resolve();
            } else {
                target.className = 'cur';
                resolve(true);
            }
        });
    },
    removeClass: function(target){
        if(!target) return true;
        target.className = target.className.replace(/(\s+|^)cur(\s+|$)/, ' ');
    }
})
const router = new VueRouter({
    // 默认hash
    // mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    store
});