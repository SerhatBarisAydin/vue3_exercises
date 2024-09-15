const app = Vue.createApp({
    data(){
        return{
            title: "bootcamp 1. gün",
            url: "https://www.google.com",
            coords:{
                x:0,
                y:0
            }
        };
    },

    methods:{
        changeTitle(change){
            this.title= change; 
        },
        changeCoords(message,event){

//            console.log(message, event.x, event.y) 

            this.coords = {
                x: event.x,
                y: event.y
            }

        }


    }

}).mount("#app");