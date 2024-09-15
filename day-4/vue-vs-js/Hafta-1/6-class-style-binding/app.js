const app = Vue.createApp({
    data(){
        return{
            showBorder: false,
            redBG: false,
            boxClass:"red",

        };
    },
//Computed kullanımı için çok güzel bir örnek
    computed:{
        boxClasses(){
            return {border: this.showBorder, red: this.redBG}
        }
    }
}).mount("#app")

