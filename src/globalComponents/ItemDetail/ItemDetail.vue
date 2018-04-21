<template>
    <div class="item">
        <div class="product-img">
            <img :src="product.img||''">
            <div class="seach"></div>
        </div>
        <ul class="tips">
            <li v-if="!title" v-for="(wk,i) in product.props" :key="i">{{ wk }}</li>
            <li v-if="title" class="title">{{ product.title }}</li>
        </ul>
        <div class="price_star">
            <span class="price">￥{{ product.price }}</span>
            <span class="star">
                {{ product.cfav }}
                <i class="iconfont icon-shoucang"></i>
            </span>            
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            product:{},
            title:false
        }
    }
</script>

<style lang="less" scoped>
    .item{
        flex-grow: 1;
        width: 48%;
        max-width: 48%;
        margin: 2% 2% 0% 0%;
        background-color: #ffffff;
        border-radius: 0.1rem;
        >.product-img{
            position: relative;
            >img{
                width: 100%;
                height: auto;
                min-height: 4.6rem;
                border-radius: 0.1rem 0.1rem 0rem 0rem;
            }
            >.seach{
                position: absolute;
                right: 0.1rem;
                bottom: 0.15rem;
                width: 0.58rem;
                height: 0.58rem;
                background: url("../../assets/seach.png") center center no-repeat;
                background-size: 0.58rem 0.58rem;
                cursor: pointer;
            }
        }
        >.tips{
            padding: 0% 4%;
            display: -webkit-box;  
            -webkit-line-clamp: 2;  
            -webkit-box-orient: vertical; 
            text-overflow: none;
            height: 0.7rem;
            >li{
                display: inline-block;
                padding: 0.02rem;
                margin: 0.02rem 0.04rem 0.02rem 0rem;
                background-color: #d8e4ec;
                color: #5a6f7a;
                font-size: 0.16rem;
            }
            >li.title{
                line-height: 0.32rem;
                text-indent: 0.2rem;
                background-color:white;
            }
        }
        .price_star{
            height: 0.3rem;
            line-height: 0.3rem;
            padding: 0.06rem 4%;
            color: #999;
            position: relative;
            background-color: white;
            border-radius: 0.1rem;
            >.price{
                max-width: 45%;
                font-size: 0.25rem;
                font-weight: 700;
                color: #333;
                overflow: hidden;
            }
            >.star{
                font-size: 0.1rem;
                overflow: hidden;
                float: right;
                i{
                    font-size: 0.1rem;
                }
            }
        }
    }
</style>
