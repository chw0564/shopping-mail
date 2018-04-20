<template>
    <div class="type-list">
        <ul>
            <li v-for="(type,i) in types" :key="i">
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
            ...mapGetters(["types"])
        }
    }
</script>

<style lang="less" scoped>
    .type-list{
        margin-top: 0.2rem;
        ul{
            list-style: none;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            li{
                flex-grow: 1;
                width: 20%;
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

