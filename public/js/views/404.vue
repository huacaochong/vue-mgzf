<template>
    <div>{{word god, 404啦}}</div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            return {
                msg: this.$store.state.$404Msg,
            }
        }
    }
</script>