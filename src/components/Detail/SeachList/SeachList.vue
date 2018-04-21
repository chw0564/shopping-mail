<template>
    <div>
        <top-search>
            <i class="iconfont icon-xiangzuojiantou" @click="goBack"></i>            
        </top-search>
        <div class="sort-bar">
            <ul @click="changeSort($event)">
                <li v-for="(sortItem,i) in filters" :key="i" :class="sortState==sortItem.sortKey?'active':''"  :data-sort="sortItem.sortKey">{{ sortItem.title }}</li>
            </ul>
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <ItemDetail v-for="(product,i) in productList" :key="i" :product="product" :title="false"></ItemDetail>   
            </div> 
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapGetters,mapActions } from "vuex";    

    export default {
        data(){
            return {
                sortState:"pop"
            }
        },
        computed:{
            ...mapGetters([
                "keyWord",
                "productList",
                "filters"
            ])
        },
        methods:{
            goBack(){
                this.$router.back();
            },
            changeSort(e){
                this.sortState = e.target.getAttribute("data-sort");
                this.$store.dispatch("loadProductList",{
                    wordKey:this.keyWord,
                    sort:this.sortState
                });
            },
            initBscroll(){
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new Bscroll(this.$refs.wrapper, {});
                        console.log(this.scroll.maxScrollY)
                    } else {
                        this.scroll.refresh();
                    }
                })
            }
        },
        mounted(){
            this.initBscroll();
        }
    }
</script>

<style lang="less" scoped>
    .sort-bar{
        color: #666;
        background-color: white;
        >ul{
            display: flex;
            line-height: 0.5rem;
            justify-content: center;
            flex-flow: row nowrap;
            list-style: none;
            >li{
                flex-grow: 1;
                text-align: center;
                cursor: pointer;
            }
            >li.active{
                color:#f9446b;
            }
        }
    }
    .wrapper{
        position: absolute;
        top: 1.31rem;
        bottom: 0rem;
        .content{
            display: flex;
            flex-flow: row wrap;
            justify-content: left;
            background-color: #eaeaea;
            padding-left: 2%;
            padding-bottom: 0.2rem;
            z-index: -9999;
        }
    }
</style>
