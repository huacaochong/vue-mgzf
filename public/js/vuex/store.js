'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import getting from './gettings.js';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export default new Vuex.Store({
    // 插件挂载
    // 很多插件不推荐在生产用 所以借助构建工具来处理Webpack 或 Browserify
    // PRODUCTION  webpack.config 中 new webpack.DefinePlugin定义
    plugins: !!PRODUCTION ? [createLogger()] : [],
    // 组件调用store.state.xxx
    state: {
        count: 0,
        indexMsg: '我是vuex.store.state indexMsg属性',
        $404Msg: '我是vuex.store.state msg属性',
        houseList: [],
        houseHomeList: []
    },
    getting,
    actions,
    mutations
});