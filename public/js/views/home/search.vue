<template>
    <div class="search">
        <div class="search-left">
            <span>上海</span>
            <i class="iconfont icon-xiala"></i>
        </div>
        <div class="search-input">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="小区、商圈、地铁">
        </div>
    </div>
</template>
<script>
export default {
    name: 'search',
    data(){
        return {}
    }
}
</script>
<style scoped>
    .search{
        display: -webkit-flex; /* Safari */
        display: flex;
        height: 3rem;
        line-height: 3rem;
        border-bottom: 1px solid #ddd;
    }
    .search-left,
    .search-input{
        float: left;
        margin-top: .6rem;
        height: 1.8rem;
        line-height: 1.8rem;
    }
    .search-left{
        flex-shrink: 0;
        margin-left: 1rem;
        margin-right: .6rem;
    }
    .search-input{
        width: 100%;
        margin-right: 1rem;
        padding-left: .5rem;
        border-radius: .3rem;
        background-color: #efefef;
    }
    .search-input input{
        margin-left: .2rem;
        width: 88%;
    }
</style>