<template>
    <div class="item">
        <img :src="product.img||''">
        <ul class="tips">
            <li v-for="(wk,i) in product.props" :key="i">{{ wk }}</li>
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
            product:{}
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
        >img{
            width: 100%;
            height: auto;
            min-height: 4.6rem;
            border-radius: 0.1rem 0.1rem 0rem 0rem;
        }
        >.tips{
            padding-left: 4px;
            display: -webkit-box;  
            -webkit-line-clamp: 2;  
            -webkit-box-orient: vertical; 
            text-overflow: none;
            height: 0.8rem;
            >li{
                display: inline-block;
                padding: 2px 2px;
                margin: 2px 4px 2px 0px;
                background-color: #eaeaea;
                background: #eff3f6;
                color: #5a6f7a;
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
