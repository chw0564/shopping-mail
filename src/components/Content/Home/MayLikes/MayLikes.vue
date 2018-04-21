<template>
    <div class="may-like">
        <div class="box-title">猜你喜欢</div>
        <div class="like-list">
            <ItemDetail v-for="(product,i) in likes" :key="i" :product="product" :title="true"></ItemDetail>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"    

    export default {
        computed:{
            ...mapGetters(["likes"])            
        },
        mounted(){
            this.$store.dispatch("loadLikes");
        }
    }
</script>

<style lang="less" scoped>
    .may-like{
        margin-top: 0.3rem;
        .box-title{
            font-size: 0.22rem;
            color: #333;
            width: 4rem;
            background: url("../../../../assets/line.png") center center no-repeat;
            background-size: 4rem auto;
            margin: 0 auto;
            text-align: center;
        }
        .like-list{
            display: flex;
            flex-flow: row wrap;
            justify-content: left;
            padding-left: 2%;
            padding-bottom: 0.2rem;
        }
    }
</style>
