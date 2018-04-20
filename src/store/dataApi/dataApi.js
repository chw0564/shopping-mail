import jsonp from "fetch-jsonp";

const mce = "https://mce.mogucdn.com/jsonp/";
const list = "https://list.mogujie.com";
const rate = "https://rate.mogujie.com/h5/rate/jsonp/x6.rate.ratelist/v1";

const parseParams = function(params){
    let paramStr = "";
    for (const key in params) {
        paramStr += `${key}=${params[key]}&`;
    }
    return paramStr.substring(0,paramStr.length-1);
}

export default {

    loadSeachData(params){
        let paramStr = parseParams(params);
        return jsonp(`${list}/module/mget?${paramStr}`)
               .then((response) => {
                    return response.json()
                });
    },

    loadDatasBySeachWord(params){
        let paramStr = parseParams(params);
        return jsonp(`${list}/search?${paramStr}`)
               .then((response) => {
                    return response.json()
                });
    },

    loadDatasByPid(params){
        let paramStr = parseParams(params);
        return jsonp(`${mce}/multiget/3?${paramStr}`)
               .then((response) => {
                    return response.json()
                });
    }

}