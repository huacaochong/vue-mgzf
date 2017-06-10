<template>
    <div class="container">
        <search leftWidth="2">
            <i class="iconfont icon-fanhui" @click="back"></i>
        </search>
        <template v-for="item in houseList">
            <box v-bind:list="item.list">
                <div class="if-search">
                    <ul>
                        <li>地铁区域</li>
                        <li>价格</li>
                        <li>推荐排序</li>
                        <li>更多筛选</li>
                    </ul>
                </div>
            </box>
        </template>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import search from './comm/search.vue';
import box from './comm/box.vue';
    export default {
        name: 'list',
        components: {
            search,
            box
        },
        computed: mapState({
            'houseList': 'houseList'
        }),
        mounted(){
            this.$store.dispatch('getHouseList', this.$route.query || {});
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
<style scoped>
.container{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction:column;
}
.if-search{
    display: block;
    border-bottom: 1px solid #ededed;
}
.if-search ul{
    display: flex;
}
.if-search li{
    flex: 1;
    text-align: center;
    font-size: .8rem;
    color: #9f9f9f;
}
.if-search li ~ li:before{
    content: '|';    
    float: left;

}
</style>
