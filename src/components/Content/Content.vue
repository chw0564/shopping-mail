<template>
    <div>
        <router-view></router-view>
        <bottom-nav></bottom-nav>
    </div>
</template>

<script>
    import BottomNav from "./BottomNav/BottomNav";

    export default {
        components:{
            BottomNav
        }
    }
</script>

<style lang="less" scoped>

</style>
