/* Modül oluştururken export default bu şekilde obje olarak kullanılabilir */

export default{
    /* namespaced terimini araştır!!! */
    namespaced: true,

    state: {
        itemList: [],
        userList: []
    },
    mutations:{
        setItem(state, item){
            state.itemList.push(item)
        }
    },
    getters: {
        _itemList: state => state.itemList       
    }
}