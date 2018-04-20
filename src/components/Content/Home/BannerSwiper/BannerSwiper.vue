<template>
    <div class="wrap">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,i) in warpImgs" :key="i">
                <img :src="item.image_800" alt="">
            </swiper-slide>
            
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
       data(){
            return{
                swiperOption:{
                    autoplay:2000,
                    loop:true,
                    pagination : '.swiper-pagination', 
                    paginationClickable :true, 
                }
            }
        },
        computed:{
            ...mapGetters(["warpImgs"])
        }
    }
</script>

<style lang="less" scoped>
     .wrap{
        max-height: 3rem;
        overflow: hidden;
        img{
            width: 100%
        }
    }
</style>
