const app = Vue.createApp({
    data(){
        return{
            toggle: false,
            isImportant: true,
            arrayList:[ {id:1 , name:"baris"},
                        {id:2 , name:"barissfad"},
                {id:3 , name:"aydin"},
                {id:4 , name:"serhat"}],
            onInput: 0,
        };
    },

    methods:{
     
        
    }
}).mount("#app")