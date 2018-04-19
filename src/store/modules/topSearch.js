import jsonp from "../dataApi/dataApi";

const state = {
    history:[],
    hot:[],
    keyWord:""
}

const getters = {
    history(){
        return state.history;
    },
    hot(){
        return state.hot;
    },
    keyWord(){
        return state.keyWord;
    }
}

const actions = {
    setKeyWord({commit},newWord){
        commit("SETKEYWORD",newWord);
    },
    addHistory({commit,state}){
        commit("SETHISTORY",state.keyWord);    
    },
    clearHistory({commit}){
        commit("SETHISTORY",[]);
    },
    loadKeyWord({commit}){
        jsonp.loadSeachData({code:"sketch"})
             .then(( { data:{ sketch:{ data:{ query } } } } )=>{
                commit("SETKEYWORD",query);
             }).catch((error)=>{
                console.error("loadKeyWord方法出错:",error);
             });
    },
    loadHotWord({commit}){
        jsonp.loadSeachData({code:"hotWord"})
             .then(( { data:{ hotWord:{ data } } } )=>{
                commit("SETHOT",data);
             }).catch((error)=>{
                console.error("loadHotWord:",error);
             });
    }
}

const mutations = {
    SETKEYWORD(state,data){
        state.keyWord = data;
    },
    SETHOT(state,data){
        state.hot = data;
    },
    SETHISTORY(state,data){
        if(typeof data != "string"){
            state.history = [];
            return;
        }
        if(state.history.indexOf(state.keyWord)==-1){
            state.history.push(state.keyWord);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}