
import TopSearch        from "./TopSearch/TopSearch";
import ItemDetail       from './ItemDetail/ItemDetail'

export default {
    install:function(Vue){
        Vue.component("TopSearch",TopSearch);
        Vue.component("ItemDetail",ItemDetail);
        
    }
}