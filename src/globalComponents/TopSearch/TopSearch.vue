<template>
    <div>
        <div class="top-seach-box" v-show="seachStart">
            <!-- <i class="iconfont icon-xiaoxizhongxin"></i> -->
            <slot></slot>
            <div class="seach-input" @click="changeSeach">
                <i class="iconfont icon-sousuo"></i>
                <span>{{ keyWord }}</span>
            </div>
            <i class="iconfont icon-gouwuche"></i>
        </div>
        <div class="top-seach-box" v-show="!seachStart">
            <i class="iconfont icon-xiangzuojiantou" @click="changeSeach"></i>
            <input class="user-input" type="text" v-model="keyWord">
            <span  @click="seachData">搜索</span>
        </div>
        <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <div class="seach-back" v-show="!seachStart">
                <div class="box">
                    <p>
                        <i class="iconfont icon-sousuo"></i>
                        <span>历史搜索</span>
                        <i class="iconfont icon-lajixiang clear-words" @click="clearSeachData"></i>
                    </p>
                    <ul class="word" @click="seachByWorld($event)">
                        <li class="no-style" v-if="history.length==0">暂无历史搜索</li>
                        <li v-for="(word,i) in history" :key="i">{{ word }}</li>
                    </ul>
                </div>
                <div  class="box">
                     <p>
                        <i class="iconfont icon-shoucang"></i>
                        <span>历史搜索</span>
                    </p>
                    <ul class="word" @click="seachByWorld($event)">
                        <li v-for="(obj,i) in hot" :key="i" :style="'color:'+obj.color">{{ obj.query }}</li>
                    </ul>
                </div>
            </div>
        </transition>
       
    </div>
</template>

<script>
    import { mapGetters,mapActions } from "vuex";

    export default {
        data(){
            return {
                seachStart:true
            }
        },
        computed:{
            ...mapGetters([
                "history",
                "keyWord",
                "hot"
            ]),
            keyWord:{
                get(){
                    return this.$store.getters.keyWord;
                },
                set(value){
                    this.$store.dispatch("setKeyWord",value);
                }
            }
        },
        methods:{
            changeSeach(){
                if(this.seachStart){
                    this.$store.dispatch("loadHotWord");                   
                }else{
                    this.$store.dispatch("loadKeyWord");
                } 
                this.seachStart = !this.seachStart;
            },
            seachData(){              
                this.$store.dispatch("addHistory");
                this.loadData();            
            },
            clearSeachData(){
                this.$store.dispatch("clearHistory");                
            },
            seachByWorld(e){
                this.$store.dispatch("setKeyWord",e.target.innerHTML);
                this.$store.dispatch("addHistory");
                this.loadData();
            },
            loadData(){
                this.$store.dispatch("loadProductList",{
                    wordKey:this.keyWord,
                    sort:'pop'
                }); 
                this.seachStart = true;                
                this.$router.push("/detail/seachList");
            }
        }
    }
</script>

<style lang="less" scoped>
    .top-seach-box{
        background-color: white;
        border-bottom: 1px solid #dddddd;
        text-align: center;
        height: 0.8rem;
        display: flex;
        flex-flow: row nowrap;
		justify-content: center;
        line-height: 0.8rem;
        >.iconfont{
            font-size: 0.386rem;
        }
        >i,span{
            flex-grow:1;
            cursor: pointer;
        }
        >span:hover{
            color: #f9446b
        }
        >.seach-input{
            text-align: left;
            flex-grow:8;
            background-color:#eaeaeaea;
            margin: 0.15rem 0rem;
            border-radius: 0.1rem;
            height: 0.5rem;
            line-height: 0.5rem;
            padding-left: 0.2rem;
            color: #cccccc;
            cursor: pointer;
            >i{
                font-size: 0.26rem;    
            }
        }
        >.user-input{
            flex-grow:5;
            margin: 0.15rem 0rem;
            border-radius: 0.1rem;
            height: 0.5rem;
            line-height: 0.5rem;
            outline: none;
            border: 1px solid #888;
            padding-left: 0.1rem;
            color: #888;
        }
        >.user-input:focus{
            border: 1px solid #f9446b;
        }
    }
    .seach-back{
        background-color: white;
        position: absolute;
        width: 100%;
        top: 0.81rem;
        bottom: 0rem;
        z-index: 99;
        >.box{
            padding: 0.16rem 0.2rem;
            border-bottom: 1px solid #ccc;
            i{
                font-size: 0.2rem;
            }
            i.clear-words{
                float: right;
                cursor: pointer;
            }
            span{
                font-size: 0.16rem;
                color: #888888;
            }
            >.word{
                color: #888888;
                padding: 0.14rem 0rem 0.14rem 0.24rem;
                >li{
                    font-size: 0.16rem;
                    display: inline-block;
                    padding-right: 0.1rem;
                    border: 1px solid #cccccc;
                    text-align: center;
                    padding: 0.06rem 0.12rem;
                    border-radius: 0.06rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.06rem;
                    cursor: pointer;
                }
                >li.no-style{
                    border: none;
                }
            }
        }
        >.box:last-child{
            border: none;
        }
    }
</style>
