export default{
    namespaced: true,

    state: {
        contactName: "serhat",
        contactAdress: "canada"
    },
    mutations:{
        setItem(state, name){
            state.contactName = name;
        },
    },
    getters:{
        _contactName : state => state.contactName
    }

}