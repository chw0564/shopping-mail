<template>
    <div class="type-list">
        <div class="box-title">热门分类</div>
        <ul>
            <li v-for="(type,i) in hotTypes" :key="i">
                <img :src="type.image" alt="" srcset="">
                <span>{{ type.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
         computed:{
            ...mapGetters(["hotTypes"])
        }
    }
</script>

<style lang="less" scoped>
    .type-list{
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
        ul{
            margin-top: 0.3rem;
            list-style: none;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            li{
                flex-grow: 1;
                width: 25%;
                text-align: center;
                margin-bottom: 0.2rem;
                img{
                    width: 70%;
                }
                span{
                    display:block;
                    padding: 0rem 0.1rem;
                    font-size: 0.2rem;
                    color: #5a6f7a;
                }
            }
        }
    }
</style>

