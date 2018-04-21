import jsonp from "../dataApi/dataApi";

const state = {
    warpImgs:[],
    types:[],
    bebefit:[],
    hotTypes:[],
    likes:[]
}

const getters = {
    warpImgs(){
        return state.warpImgs;
    },
    types(){
        return state.types;
    },
    bebefit(){
        return state.bebefit;
    },
    hotTypes(){
        return state.hotTypes;
    },
    likes(){
        return state.likes;
    }
}

const actions = {
    loadHomeDatas({ commit }){
        jsonp.loadDatasByPid({
            pids:"51822,106930,51833,51836",
            appPlat:"m"
        }).then(( { data } )=>{
            commit("SETWAPIMGS",data[51822].list);
            commit("SETTYPES",data[106930].list);
            commit("SETBEBEFIT",data[51833].list);
            commit("SETHOTTYPES",data[51836].list);
        })
    },
    loadLikes({ commit }){
        jsonp.loadDatasBySeachWord({
            pid:"9750",
            sort:"pop",
            cKey:46
        }).then(( { result:{ wall :{ docs }} } )=>{
            commit("SETLIKES",docs);
        });
    }
}

const mutations = {
    SETWAPIMGS(state,data){
        state.warpImgs = data;
    },
    SETTYPES(state,data){
        state.types = data;
    },
    SETBEBEFIT(state,data){
        state.bebefit = data;
    },
    SETHOTTYPES(state,data){
        state.hotTypes = data;
    },
    SETLIKES(state,data){
        state.likes = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}