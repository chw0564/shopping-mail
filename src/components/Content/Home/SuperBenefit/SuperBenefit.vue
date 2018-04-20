<template>
    <div class="benefit-box">
        <div class="box-title">超实惠-促销直达</div>
        <div class="box-item-list">
            <div v-for="(item,i) in bebefit " :key="i" :class="'item'+ (i<3?i:'') ">
                <p class="item-title">{{item.title}}</p>
                <p class="item-viceTitle">{{item.viceTitle|deleteBraces}}</p>
                <img class="image" :src="item.image" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        computed:{
            ...mapGetters(["bebefit"])
        },
        filters:{
            deleteBraces(word){
                return word.replace(/{|}/g,"");
            }
        }
    }
</script>

<style lang="less" scoped>
    .benefit-box{
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
        .box-item-list{
            border-top:0.01rem solid #cccccc;
            border-bottom:0.01rem solid #cccccc;
            margin-top: 0.1rem;
            text-align: center;
            >div{
                float: left;
            }
            .item-title{
                font-size:0.2rem;
                font-weight: 700;
                height: 0.32rem;
                line-height: 0.32rem;
            }
            .item-viceTitle{
                font-size:0.14rem;
                color:#f9446b;
            }
            .item0{
                border-right:0.01rem solid #ddd;
                width: 48%;
                height: 2.7rem;
                .item-title{
                    margin-top: 0.3rem;
                }
                .image{
                    width: 55%;
                }
            }
            .item{
                width: 33%;
                height: 2.25rem;
                border-top:0.01rem solid #ddd;
                border-right:0.01rem solid #ddd;
                .image{
                    width: 75%;
                }
                .item-title{
                   margin-top: 0.13rem;
                }
            }
            .item:last-child{
                border-right:none;
            }
            .item1{
                border-bottom:0.01rem solid #ddd;
            }
            .item1,.item2{
                padding-left:0.23rem;
                text-align: left;
                width: 48%;
                height: 1.35rem;
                .item-title{
                   margin-top: 0.28rem;
                }
                .image{
                    position: relative;
                    top: -0.8rem;
                    right: -1.4rem;
                    height: 1.3rem;
                }
                .item-viceTitle{
                    text-align: left;
                }
            }
            
        }
    }
    
</style>
