import { createStore } from "vuex";
/* module import edilir */
import contact from "./modules/contact";
import taskManager from "./modules/taskManager";


const store = createStore({

    namespaced: true,
    state:{

        mainName: "barisaydin"


    },
/* moduller bu şekilde tanımlanır */
    modules:{
        /* key value olarak çalışır o yüzden bu şeklide bir yazımı oluyor ama bu yazım olmadan da 
        direkt olarak 
        => contact 
        => taskManager 
        şeklinde de yazılabilir ecmascript özelliklerinden biridir bu */


        /* module ismini değiştirmek istersek eğer nu yazımda olduğu gibi 
        yeniIsim: contact 
        şeklinde yazılabilir.  */
        musteri: contact,
        taskManager: taskManager
    }
});

export default store;