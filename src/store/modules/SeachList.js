import jsonp from "../dataApi/dataApi";

const state = {
    productList:[],
    filters:[],
    page:1
}

const getters = {
    productList(){
        return state.productList;
    },
    filters(){
        return state.filters;
    }
}

const actions = {
    loadProductList({commit},{wordKey,sort}){
        console.log(wordKey);
        jsonp.loadDatasBySeachWord({
            q:wordKey,
            page:state.page,
            sort,
            cKey:46
        }).then(({ result:{ sortFilter,wall } })=>{
            // console.log(data);
            commit("SETPRODUCTLIST",wall.docs);
            commit("SETFILTERS",sortFilter);            
        })
    }
}

const mutations = {
    SETPRODUCTLIST(state,data){
        state.productList = data;
    },
    SETFILTERS(state,data){
        state.filters = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}