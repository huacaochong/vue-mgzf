<template>
    <div>this is {{msg}}</div>
</template>
<script>
    export default {
        name: 'index',
        data() {
            console.log(this.$store)
            return {
                msg: this.$store.state.$404Msg,
            }
        }
    }
</script>