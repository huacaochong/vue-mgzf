<template>
    <div class="container">
        <search leftWidth="2">
            <i class="iconfont icon-fanhui" @click="back"></i>
        </search>
        <template v-for="item in houseList">
            <box v-bind:list="item.list">

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
</style>