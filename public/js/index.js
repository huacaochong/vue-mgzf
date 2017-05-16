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

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router,
    store
});