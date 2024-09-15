import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "baris",
      lname: "aydin",
      age: 24,
      tckn: 1111111,
      phone: 4444,
    },
    theme: "dark",
    Permissions: [1, 2, 3, 4, 5],
    FullName: "serhat baris aydin",
    userList: ["user0", "user1", "user2", "user3", "user4", "user5", "user6"],

    itemList: [
      { id: 1, title: "masa", type: "mobilya" },
      { id: 2, title: "sandalye", type: "mobilya" },
      { id: 3, title: "tv", type: "elektronik" },
      { id: 4, title: "monitör", type: "elektronik" },
      { id: 5, title: "bardak", type: "plastik" },
    ],


  },
/* Anlık olarak state'i güncellememizi sağlar. ÇOK ÖNEMLİ
Senkron olarak çalışır.  */
  mutations:{
    newItem(state, item){
        state.itemList.push(item);
    }
},

/* Action, ASENKRON çalışır 
vuex içerisinde bilgilere ulaşabilmemizi sağlayan donanıma sahip değişken */

actions:{
    //2. KULLANIM TÜRÜ
    // {commit} olarak çağırılırsa context.commit yerine direkt olarak commit kullanılır
    newItem({commit}, item){
        console.log("item: ==> ", item);
        
        setTimeout(
         () => {
              commit("newItem", item)
            }, 2000);
       }
/*
    //1. KULLANIM TÜRÜ
    
    newItem(context, item){
        console.log("item: ==> ", item);
        
        setTimeout(
         () => {
            /* Context içerisindeki mutation'ı çalıştırmak için commmit ederek kullanmamız gerekir. */
           /* context.state ==> state'de bir bilgiye ulaşmayı sağlar 
              context.dispatch ==> kullanılan başka bir action'un çağırılmasını sağlar.
            
            context.commit("newItem", item)
         }, 2000);
    } */

    
},

  getters: {
    _woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),

    //User içerisindeki bilgileri manipüle etmemize olanak tanır
    // Gösterilmesini istemediğimiz bilgileri sildik

    activeUser(state) {
      const user = {
        ...state.user,
      };

      delete user.phone;
      delete user.tckn;
      return user;
    },
  },
});

export default store;
