<template>
    <div>
        <top-search>
            <i class="iconfont icon-xiaoxizhongxin"></i>
        </top-search>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                <banner-swiper></banner-swiper>
                <types-item></types-item>
                <super-benefit></super-benefit>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    import BannerSwiper from './BannerSwiper/BannerSwiper'
    import TypesItem from './TypesItem/TypesItem'
    import SuperBenefit from './SuperBenefit/SuperBenefit'
    
   
    export default {
        components:{
            BannerSwiper,TypesItem,SuperBenefit
        },
        methods:{
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
            let datasStatus = this.$store.state.Home.warpImgs.length==0||
                              this.$store.state.Home.types.length==0||
                              this.$store.state.Home.bebefit.length==0;
            if(datasStatus){
                this.$store.dispatch("loadHomeDatas");
            }
            this.initBscroll();
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        position: absolute;
        top: 0.81rem;
        bottom: 0.81rem;
        left: 0rem;
        right: 0rem; 
        // min-height: 1000px;
        // .content{
	    //     transform:translate(0,0); 
        // }
    }
</style>
